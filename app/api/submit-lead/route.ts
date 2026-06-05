import { NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

const BRAND_NAME = "Sterling Forensic";

type LeadPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  instructionType?: string;
  message?: string;
};

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

async function notifyWebhook(payload: LeadPayload): Promise<boolean> {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) return false;

  const outbound = {
    "Full Name": sanitize(String(payload.fullName || "")),
    Email: sanitize(String(payload.email || "")).toLowerCase(),
    "Phone Number": sanitize(String(payload.phone || "")),
    "Brand name": BRAND_NAME,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function writeToSheet(payload: LeadPayload): Promise<boolean> {
  if (
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    return false;
  }

  const timestamp = new Date().toISOString();

  try {
    await appendRow([
      timestamp,
      BRAND_NAME,
      sanitize(String(payload.fullName || "")),
      sanitize(String(payload.email || "")).toLowerCase(),
      sanitize(String(payload.phone || "")),
      sanitize(String(payload.organisation || "")),
      sanitize(String(payload.instructionType || "")),
      sanitize(String(payload.message || "")),
    ]);
    return true;
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp,
    });
    return false;
  }
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const fullName = sanitize(String(body.fullName || ""));
  const email = sanitize(String(body.email || ""));

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Full name and email are required" },
      { status: 400 }
    );
  }

  const sheetWritten = await writeToSheet(body);
  const webhookSent = await notifyWebhook(body);

  if (!sheetWritten && !webhookSent) {
    const hasSheetConfig = Boolean(process.env.GOOGLE_SHEET_ID);
    const hasWebhookConfig = Boolean(
      process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
    );

    if (!hasSheetConfig && !hasWebhookConfig) {
      return NextResponse.json(
        { error: "Lead submission is not configured" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, sheetWritten, webhookSent });
}
