"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "left" | "right" | "scale";

const variantClass: Record<Variant, string> = {
  up: "",
  left: "from-left",
  right: "from-right",
  scale: "from-scale",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sofort-Check: schon im Viewport beim Mount? → direkt sichtbar machen,
    // ohne auf IntersectionObserver zu warten (fixt das Hero-Flash-Problem
    // auf langsamem Mobile, wo der Observer verzögert feuert).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    // Safety-Timeout: falls der Observer aus irgendeinem Grund nicht feuert
    // (Browser-Quirk, bfcache, …), Content nach 1.2 s zwangsweise zeigen.
    const safety = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass[variant]} ${visible ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
