import { getSiteDomain } from "@/lib/seo";

const BRAND_NAME = "Sterling Forensic";

function getLeadNotificationUrl(): string | undefined {
  return (
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
  );
}

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

export async function notifyLeadWebhook(payload: {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}): Promise<{ ok: boolean; configured: boolean }> {
  const webhookUrl = getLeadNotificationUrl();
  if (!webhookUrl) {
    return { ok: false, configured: false };
  }

  const name = sanitize(payload.fullName);
  const message = payload.message ? sanitize(payload.message) : "";
  const fullNameOutbound = message
    ? `${name} — ${message.slice(0, 500)}`
    : name;

  const outbound = {
    "Full Name": fullNameOutbound,
    Email: sanitize(payload.email).toLowerCase(),
    "Phone Number": sanitize(payload.phone),
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });
    return { ok: res.ok, configured: true };
  } catch {
    return { ok: false, configured: true };
  }
}
