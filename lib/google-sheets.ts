import { JWT } from "google-auth-library";

type CellValue = string | number | boolean | null;

type SheetTarget = {
  spreadsheetId?: string;
  sheetName?: string;
};

export type AppendResult = {
  success: boolean;
  updatedRange: string | null | undefined;
};

/**
 * Normalises the PEM private key from env vars.
 * Handles literal \\n, real newlines, and surrounding quotes.
 */
export function normalizePrivateKey(raw?: string): string | undefined {
  if (!raw) return undefined;

  let key = raw.trim();

  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  key = key.replace(/\\n/g, "\n");

  if (!key.includes("BEGIN PRIVATE KEY")) {
    throw new Error(
      "GOOGLE_PRIVATE_KEY is invalid. Paste the full private_key value from your Google service account JSON file."
    );
  }

  return key;
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);

  if (!email || !privateKey) {
    throw new Error("Missing Google service account credentials");
  }

  const client = new JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const tokenResponse = await client.getAccessToken();
  const token =
    typeof tokenResponse === "string"
      ? tokenResponse
      : tokenResponse?.token;

  if (!token) {
    throw new Error("Failed to obtain Google access token");
  }

  return token;
}

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName =
    target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }

  const token = await getAccessToken();
  const range = encodeURIComponent(`${sheetName}!A:A`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append` +
    "?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [values] }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets API error (${response.status}): ${errorText}`);
  }

  const data = (await response.json()) as {
    updates?: { updatedRange?: string };
  };

  return {
    success: true,
    updatedRange: data.updates?.updatedRange,
  };
}
