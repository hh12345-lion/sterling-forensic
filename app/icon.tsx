import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site-config";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C2E40",
          color: "#C0C8D0",
          fontSize: 18,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
