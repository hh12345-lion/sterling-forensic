import { SITE_URL } from "@/lib/site-config";

/** Hostname for lead webhooks (e.g. sterlingforensic.co.uk). Strips www. */
export function getSiteDomain(): string {
  try {
    return new URL(SITE_URL).hostname.replace(/^www\./, "");
  } catch {
    return "sterlingforensic.co.uk";
  }
}
