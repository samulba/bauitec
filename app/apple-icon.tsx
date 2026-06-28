import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#c83a30",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M40 160 L40 92 L72 70 L72 160 Z" />
            <path d="M72 160 L72 70 L108 42 L108 160 Z" />
            <path d="M108 160 L108 66 L162 52 L162 160 Z" />
            <path d="M38 162 L164 162" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
