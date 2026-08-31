import { appendRow } from "@/lib/google-sheets";

const BRAND_NAME = "Sterling Forensic";

export function isGoogleSheetsConfigured(): boolean {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const key = process.env.GOOGLE_PRIVATE_KEY?.trim();
  const sheetId = process.env.GOOGLE_SHEET_ID?.trim();
  return Boolean(email && key && sheetId);
}

export type LeadSheetPayload = {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  formType?: string;
};

export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Brand",
  "Form Type",
  "Full Name",
  "Email",
  "Phone Number",
  "Message",
] as const;

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/**
 * One shared tab (GOOGLE_SHEET_TAB_NAME). Form Type distinguishes Contact vs Instruct.
 * Soft-fail — never throws to the API caller.
 */
export async function writeLeadToSheetSafely(
  payload: LeadSheetPayload
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) {
    console.warn(
      "[sheets] not configured — skip (need GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID)"
    );
    return false;
  }

  const formType =
    payload.formType?.toLowerCase() === "instruct" ? "Instruct" : "Contact";

  try {
    await appendRow(
      [
        new Date().toISOString(),
        BRAND_NAME,
        formType,
        sanitize(payload.fullName),
        sanitize(payload.email).toLowerCase(),
        sanitize(payload.phone),
        sanitize(payload.message || ""),
      ],
      {
        sheetName: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
      }
    );
    return true;
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
      spreadsheetId: process.env.GOOGLE_SHEET_ID
        ? `${process.env.GOOGLE_SHEET_ID.slice(0, 8)}...`
        : "missing",
      tab: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
      timestamp: new Date().toISOString(),
    });
    return false;
  }
}
