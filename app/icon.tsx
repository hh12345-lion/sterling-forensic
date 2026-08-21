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
          backgroundColor: "#0B3D2E",
          color: "#C4A962",
          fontSize: 14,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
        }}
      >
        SF
      </div>
    ),
    { ...size }
  );
}
