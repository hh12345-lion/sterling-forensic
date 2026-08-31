import { NextResponse } from "next/server";
import { notifyLeadWebhook } from "@/lib/leadNotification";
import {
  isGoogleSheetsConfigured,
  writeLeadToSheetSafely,
} from "@/lib/lead-sheet";

type LeadPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  formType?: string;
  message?: string;
};

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/**
 * Webhook is the primary lead path.
 * Sheets: one shared GOOGLE_SHEET_TAB_NAME + Form Type; soft-fail only.
 */
export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const fullName = sanitize(String(body.fullName || ""));
  const email = sanitize(String(body.email || ""));
  const phone = sanitize(String(body.phone || ""));
  const message = sanitize(String(body.message || ""));
  const formType = sanitize(String(body.formType || "contact")) || "contact";

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Full name and email are required" },
      { status: 400 }
    );
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl?.trim() && !sheetsConfigured) {
    return NextResponse.json(
      { error: "Lead submission is not configured" },
      { status: 503 }
    );
  }

  if (webhookUrl?.trim()) {
    const webhook = await notifyLeadWebhook({
      fullName,
      email,
      phone,
      message,
    });

    if (!webhook.ok) {
      return NextResponse.json(
        { error: "Lead notification failed" },
        { status: 502 }
      );
    }

    // Soft-fail Sheets — never fail the user after webhook success.
    await writeLeadToSheetSafely({
      fullName,
      email,
      phone,
      message,
      formType,
    });

    return NextResponse.json({ ok: true });
  }

  // Sheets-only fallback when webhook unset.
  await writeLeadToSheetSafely({
    fullName,
    email,
    phone,
    message,
    formType,
  });
  return NextResponse.json({ ok: true });
}
