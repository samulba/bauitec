"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "./CountUp";

export function ProgressRing({
  value,
  suffix = "%",
  size = 132,
}: {
  value: number;
  suffix?: string;
  size?: number;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [active, setActive] = useState(false);
  const r = (size - 14) / 2;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative inline-flex" style={{ width: size, height: size }}>
      <svg
        ref={ref}
        width={size}
        height={size}
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={6}
          className="text-line-dark"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={6}
          strokeLinecap="round"
          className="text-amber"
          style={{
            strokeDasharray: c,
            strokeDashoffset: active ? c * (1 - value / 100) : c,
            transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-3xl font-semibold tracking-tight">
        <CountUp end={value} />
        <span className="text-amber">{suffix}</span>
      </span>
    </div>
  );
}
