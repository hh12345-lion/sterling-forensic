import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site-config";

export const alt = `${SITE_NAME} | UK Forensic Accounting`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1C2E40",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontFamily: "Georgia, serif",
            marginBottom: 24,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 32, color: "#C0C8D0", maxWidth: 900 }}>
          Expert Witness &amp; Forensic Accounting | England and Wales
        </div>
        <div
          style={{
            marginTop: 40,
            height: 4,
            width: 120,
            backgroundColor: "#7B2D3E",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
