import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#7C3AED",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "system-ui",
          borderRadius: 14,
        }}
      >
        {siteConfig.monogram}
      </div>
    ),
    { ...size }
  );
}
