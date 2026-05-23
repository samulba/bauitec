"use client";

import { useState } from "react";

export function ProjectImage({
  src,
  alt,
  index,
}: {
  src?: string;
  alt: string;
  index: number;
}) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={1200}
        height={900}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="zoom-img h-full w-full object-cover"
      />
    );
  }

  return <PlaceholderImage index={index} />;
}

function PlaceholderImage({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="zoom-img h-full w-full object-cover opacity-90"
      aria-hidden
    >
      <defs>
        <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1f1b16" />
          <stop offset="100%" stopColor="#14110e" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#grad-${index})`} />
      <g stroke="#d98324" strokeWidth="1.2" opacity="0.25" fill="none">
        {Array.from({ length: 9 }).map((_, r) => (
          <line key={r} x1="0" y1={r * 38} x2="400" y2={r * 38 - 80} />
        ))}
      </g>
      <text
        x="200"
        y="158"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="13"
        letterSpacing="2"
        fill="#a8a29e"
      >
        FOTO FOLGT
      </text>
    </svg>
  );
}
