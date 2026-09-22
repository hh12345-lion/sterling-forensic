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

function resolveLeadMessage(body: Record<string, unknown> | null | undefined): string {
  if (!body || typeof body !== "object") return "";
  const keys = [
    "message",
    "Message",
    "description",
    "enquiry",
    "details",
    "summary",
    "notes",
    "matter",
    "caseSummary",
    "case_summary",
    "caseBrief",
    "caseDescription",
    "caseDetails",
    "additionalInfo",
    "additional_info",
    "enquiryDetails",
    "matterDescription",
    "additionalNotes",
    "caseBackground",
    "specificQuestions",
    "briefSummary",
    "conflict_info",
    "brief",
    "formalInstructionsText",
    "formalInstructions",
    "instructions",
  ] as const;
  for (const key of keys) {
    if (body[key] != null && String(body[key]).trim()) {
      return String(body[key]).trim();
    }
  }
  return "";
}

/**
 * Soft-fail webhook + soft-fail Sheets.
 * Never return "Lead submission is not configured" when either path can store.
 * Soft-continue if webhook fails so Sheets can still succeed.
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
  const message = sanitize(
    resolveLeadMessage(body as Record<string, unknown>) ||
      String(body.message || "")
  );
  const formType = sanitize(String(body.formType || "contact")) || "contact";

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Full name and email are required" },
      { status: 400 }
    );
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  let forwarded = false;
  if (webhookUrl?.trim()) {
    const webhook = await notifyLeadWebhook({
      fullName,
      email,
      phone,
      message,
    });
    forwarded = webhook.ok;
    if (!webhook.ok) {
      console.error(
        "[submit-lead] webhook failed — continuing with Sheets fallback"
      );
    }
  } else {
    console.warn(
      "[submit-lead] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  const writtenToSheet = await writeLeadToSheetSafely({
    fullName,
    email,
    phone,
    message,
    formType,
  });

  if (!forwarded && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "Lead storage failed",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID) on Netlify, then redeploy.",
        sheetsConfigured: isGoogleSheetsConfigured(),
        webhookConfigured: Boolean(webhookUrl?.trim()),
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    success: true,
    forwarded,
    writtenToSheet,
  });
}
