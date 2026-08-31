/** @type {string} Per-brand label sent to the lead webhook */
const BRAND_NAME = "Sterling Forensic";

function getSiteDomain() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sterlingforensic.co.uk";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "sterlingforensic.co.uk";
  }
}

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
  );
}

/**
 * Webhook-only path (optional). Prefer the Next.js /api/submit-lead route so
 * soft-fail Google Sheets + Form Type also run in production.
 * @param {import("@netlify/functions").HandlerEvent} event
 */
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!fullName || !email) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "fullName and email are required" }),
    };
  }

  const webhookUrl = getLeadNotificationUrl();
  if (!webhookUrl) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Lead notification not configured" }),
    };
  }

  const fullNameOutbound = message
    ? `${fullName} — ${message.slice(0, 500)}`
    : fullName;

  const outbound = {
    "Full Name": fullNameOutbound,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });
    if (!res.ok) {
      console.error("Lead webhook failed:", res.status, await res.text());
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Lead notification failed" }),
      };
    }
  } catch (err) {
    console.error("Lead webhook error:", err);
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Lead notification failed" }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true }),
  };
};
