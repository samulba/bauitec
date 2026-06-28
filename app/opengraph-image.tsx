import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "bauitec — Wir bauen, was bleibt.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fdfaf1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Subtle architectural grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(20,17,14,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,17,14,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <svg
            width="220"
            height="220"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="92" fill="#c83a30" />
            <g
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M40 160 L40 92 L72 70 L72 160 Z" />
              <path d="M72 160 L72 70 L108 42 L108 160 Z" />
              <path d="M108 160 L108 66 L162 52 L162 160 Z" />
              <path d="M38 162 L164 162" />
            </g>
          </svg>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 700,
                color: "#14110e",
                letterSpacing: -4,
                lineHeight: 1,
              }}
            >
              bauitec
            </div>
            <div
              style={{
                height: 6,
                width: 80,
                background: "#d98324",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 44,
            color: "#3a342d",
            letterSpacing: -1,
          }}
        >
          Wir bauen, was bleibt.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#6b6354",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <span>bauitec.com</span>
          <span>Großraum München · 100 km</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
