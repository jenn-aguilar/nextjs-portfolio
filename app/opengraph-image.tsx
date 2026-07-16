import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config/site";

export const runtime = "edge";
export const alt = siteConfig.ogTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(167,139,250,0.35), transparent 60%), radial-gradient(800px 400px at -10% 30%, rgba(124,58,237,0.28), transparent 60%), #09090b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(167,139,250,0.2)",
              color: "#a78bfa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            {siteConfig.monogram}
          </div>
          <div style={{ fontSize: 22, opacity: 0.7 }}>{siteConfig.siteUrl.replace(/https?:\/\//, "")}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a78bfa", fontWeight: 600 }}>
            {siteConfig.roles.join(" · ")}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#d4d4d8",
              marginTop: 8,
              maxWidth: 900,
            }}
          >
            {siteConfig.metaDescription}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
