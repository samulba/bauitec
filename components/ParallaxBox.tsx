"use client";

import { useParallax } from "./useParallax";

export function ParallaxBox({
  children,
  speed = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useParallax<HTMLDivElement>(speed);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
