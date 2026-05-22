"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Hero() {
  const planRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const plan = planRef.current;
    const glow = glowRef.current;
    const section = sectionRef.current;
    if (!plan || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let mx = 0;
    let my = 0;
    let sy = 0;

    const apply = () => {
      raf = 0;
      plan.style.transform = `translate3d(${mx}px, ${my + sy}px, 0)`;
      if (glow) glow.style.transform = `translate3d(${mx * -0.6}px, ${my * -0.6}px, 0)`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      mx = ((e.clientX - r.width / 2) / r.width) * 34;
      my = ((e.clientY - r.height / 2) / r.height) * 34;
      schedule();
    };
    const onScroll = () => {
      sy = window.scrollY * 0.14;
      schedule();
    };
    section.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      section.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink pt-32 pb-14 text-paper"
    >
      {/* Blueprint grid (amber, masked) */}
      <div
        className="blueprint pointer-events-none absolute inset-0 text-amber [mask-image:radial-gradient(90%_80%_at_30%_40%,black,transparent)]"
        aria-hidden
      />
      {/* Amber glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -right-40 -top-20 h-[42rem] w-[42rem] rounded-full bg-amber/20 blur-[120px]"
        aria-hidden
      />
      {/* Parallax blueprint floor plan */}
      <div
        ref={planRef}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[40rem] -translate-y-1/2 select-none lg:block xl:right-0"
      >
        <FloorPlan />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Availability pill */}
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line-dark bg-ink-soft/60 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            <span className="eyebrow text-paper/80">
              Poing bei München · Erstgespräch kostenlos
            </span>
          </div>
        </Reveal>

        <h1 className="mt-8 text-[3.25rem] font-semibold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
          <Reveal delay={80} as="span" className="block">
            Wir bauen,
          </Reveal>
          <Reveal delay={170} as="span" className="block">
            <span className="relative inline-block">
              <span className="px-2 text-paper">was&nbsp;bleibt.</span>
              <span className="mark-wipe absolute inset-0 flex items-center bg-amber px-2 text-ink">
                was&nbsp;bleibt.
              </span>
            </span>
          </Reveal>
          <Reveal delay={260} as="span" variant="left" className="block">
            <span className="serif-italic text-stone-light">
              nicht das Versprechen.
            </span>
          </Reveal>
        </h1>

        <Reveal delay={360}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
            Sanierung, Innenausbau, Beton- und Gartenarbeiten — vom ersten
            Aushub bis zur Abnahme. In einer Hand. Mit eigenem Team. In Poing
            bei München.
          </p>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="group relative overflow-hidden rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Projekt anfragen →</span>
              <span className="absolute inset-0 -translate-x-full bg-paper/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#leistungen"
              className="rounded-full border border-paper/25 px-7 py-4 text-base font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
            >
              Leistungen ansehen
            </a>
          </div>
        </Reveal>

        {/* Trust / stats strip */}
        <Reveal delay={560}>
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-line-dark pt-8 sm:grid-cols-4">
            <div>
              <div className="flex gap-0.5 text-amber" aria-hidden>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-paper/60">
                <CountUp end={98} />% Weiterempfehlung
              </p>
            </div>
            <Stat value={93} suffix="+" label="Bauvorhaben" />
            <Stat value={7} label="Gewerke" />
            <div>
              <p className="text-2xl font-semibold tracking-tight">0€</p>
              <p className="mt-1 text-sm text-paper/60">Subunternehmer</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <div className="relative mx-auto mt-12 w-full max-w-6xl px-6">
        <div className="flex items-center gap-3 text-paper/50">
          <span className="relative flex h-9 w-5 justify-center rounded-full border border-paper/30">
            <span className="mt-1.5 h-1.5 w-1 animate-bounce rounded-full bg-amber" />
          </span>
          <span className="eyebrow">Scroll</span>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight">
        <CountUp end={value} />
        <span className="text-amber">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-paper/60">{label}</p>
    </div>
  );
}

function FloorPlan() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      className="draw-plan h-auto w-full text-amber"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <g opacity={0.28} strokeLinecap="round">
        {/* Dimension line (top) */}
        <line x1="80" y1="44" x2="440" y2="44" strokeWidth={1} />
        <line x1="80" y1="36" x2="80" y2="52" strokeWidth={1} />
        <line x1="260" y1="36" x2="260" y2="52" strokeWidth={1} />
        <line x1="440" y1="36" x2="440" y2="52" strokeWidth={1} />

        {/* Outer walls */}
        <rect x="80" y="80" width="360" height="300" />
        {/* Inner walls */}
        <line x1="260" y1="80" x2="260" y2="240" />
        <line x1="260" y1="240" x2="440" y2="240" />
        <line x1="80" y1="240" x2="180" y2="240" />

        {/* Door swing (arc) */}
        <path d="M180 240 A60 60 0 0 1 180 300" />
        <line x1="180" y1="240" x2="180" y2="300" />

        {/* Window marks */}
        <line x1="120" y1="80" x2="200" y2="80" strokeWidth={3} />
        <line x1="320" y1="380" x2="400" y2="380" strokeWidth={3} />

        {/* Stair hatching */}
        <g strokeWidth={1}>
          <rect x="300" y="280" width="110" height="80" />
          <line x1="300" y1="296" x2="410" y2="296" />
          <line x1="300" y1="312" x2="410" y2="312" />
          <line x1="300" y1="328" x2="410" y2="328" />
          <line x1="300" y1="344" x2="410" y2="344" />
        </g>
      </g>

      {/* Corner registration marks */}
      <g opacity={0.4} strokeWidth={1.2}>
        <path d="M64 80 h-16 M64 80 v-16" />
        <path d="M456 80 h16 M456 80 v-16" />
      </g>
    </svg>
  );
}
