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

function trimEnvQuotes(value: string | undefined): string | undefined {
  if (value == null) return undefined;
  let v = value.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }
  return v || undefined;
}

/** Accepts raw ID or a full `docs.google.com/spreadsheets/d/...` URL. */
export function normalizeSpreadsheetId(
  raw: string | undefined
): string | undefined {
  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;
  const fromUrl = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (fromUrl?.[1]) return fromUrl[1];
  return trimmed;
}

/** Default tab for this brand when GOOGLE_SHEET_TAB_NAME is unset. */
export const DEFAULT_SHEET_TAB_NAME = "Sterling Forensic";

function resolveSheetTabName(override?: string): string {
  const raw =
    trimEnvQuotes(override || process.env.GOOGLE_SHEET_TAB_NAME) ||
    DEFAULT_SHEET_TAB_NAME;
  return raw.replace(/\s+/g, " ").trim();
}

/** A1 range for append; quotes tab names with spaces before URL encoding. */
function appendRangeForTab(sheetName: string): string {
  const name = sheetName || DEFAULT_SHEET_TAB_NAME;
  if (/^[A-Za-z0-9_]+$/.test(name)) return `${name}!A:A`;
  return `'${name.replace(/'/g, "''")}'!A:A`;
}

/**
 * Normalises the PEM private key from env vars.
 * Handles literal \\n, real newlines, surrounding quotes, and one-line PEM.
 */
export function normalizePrivateKey(raw?: string): string | undefined {
  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;

  let key = trimmed;
  for (let i = 0; i < 3 && key.includes("\\n"); i += 1) {
    key = key.replace(/\\n/g, "\n");
  }
  key = key.trim();

  if (key.includes("BEGIN PRIVATE KEY") && !key.includes("\n")) {
    key = key
      .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
      .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----");
  }

  if (!key.includes("BEGIN PRIVATE KEY")) {
    console.error(
      "GOOGLE_PRIVATE_KEY is invalid. Paste the full private_key value from your Google service account JSON file."
    );
    return undefined;
  }

  return key;
}

async function getAccessToken(): Promise<string> {
  const email = trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
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
  const spreadsheetId = normalizeSpreadsheetId(
    target?.spreadsheetId || process.env.GOOGLE_SHEET_ID
  );
  const sheetName = resolveSheetTabName(target?.sheetName);

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }

  const token = await getAccessToken();
  const range = encodeURIComponent(appendRangeForTab(sheetName));
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
