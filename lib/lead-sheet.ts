import { appendRow } from "@/lib/google-sheets";

const BRAND_NAME = "Sterling Forensic";

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
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
    console.warn("Google Sheets not configured — lead not persisted to sheet.");
    return false;
  }

  const formType =
    payload.formType?.toLowerCase() === "instruct" ? "Instruct" : "Contact";

  try {
    await appendRow([
      new Date().toISOString(),
      BRAND_NAME,
      formType,
      sanitize(payload.fullName),
      sanitize(payload.email).toLowerCase(),
      sanitize(payload.phone),
      sanitize(payload.message || ""),
    ]);
    return true;
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });
    return false;
  }
}
