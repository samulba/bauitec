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
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 xl:grid-cols-[1.12fr_0.88fr]">
          {/* Left: content */}
          <div>
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

            <h1 className="mt-8 text-[3.25rem] font-semibold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl xl:text-[4.25rem] 2xl:text-7xl">
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
                Aushub bis zur Abnahme. In einer Hand. Mit eigenem Team. In
                Poing bei München.
              </p>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/kontakt"
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
          </div>

          {/* Right: blueprint floor plan */}
          <div className="hidden select-none xl:block" aria-hidden>
            <div ref={planRef} className="mx-auto w-full max-w-[34rem]">
              <FloorPlan />
            </div>
          </div>
        </div>

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
      viewBox="0 0 600 560"
      fill="none"
      className="draw-plan h-auto w-full text-amber"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Dimension lines */}
      <g opacity={0.3} strokeWidth={1}>
        {/* top */}
        <line x1="70" y1="64" x2="470" y2="64" />
        <line x1="70" y1="56" x2="70" y2="72" />
        <line x1="290" y1="56" x2="290" y2="72" />
        <line x1="470" y1="56" x2="470" y2="72" />
        {/* left */}
        <line x1="44" y1="100" x2="44" y2="430" />
        <line x1="36" y1="100" x2="52" y2="100" />
        <line x1="36" y1="430" x2="52" y2="430" />
      </g>
      <g opacity={0.55} fontFamily="monospace" fontSize="12" letterSpacing="1" fill="currentColor" stroke="none">
        <text x="180" y="52" textAnchor="middle">5,40</text>
        <text x="380" y="52" textAnchor="middle">3,60</text>
        <text x="22" y="270" textAnchor="middle" transform="rotate(-90 22 270)">6,80</text>
      </g>

      {/* Walls (thick) */}
      <g opacity={0.42} strokeWidth={4}>
        <rect x="70" y="100" width="400" height="330" />
        {/* interior walls */}
        <line x1="290" y1="100" x2="290" y2="270" />
        <line x1="290" y1="270" x2="470" y2="270" />
        <line x1="70" y1="270" x2="180" y2="270" />
        <line x1="180" y1="270" x2="180" y2="430" />
        <line x1="290" y1="350" x2="470" y2="350" />
      </g>

      {/* Openings: doors (arcs) + windows */}
      <g opacity={0.32} strokeWidth={1.5}>
        {/* door 1 */}
        <path d="M180 270 A55 55 0 0 1 235 325" />
        <line x1="180" y1="270" x2="180" y2="325" opacity={0} />
        {/* door 2 */}
        <path d="M290 200 A48 48 0 0 0 338 248" />
        {/* door 3 */}
        <path d="M360 350 A40 40 0 0 1 360 310" />
        {/* windows (double-line marks) */}
        <line x1="110" y1="100" x2="210" y2="100" strokeWidth={3.5} />
        <line x1="110" y1="96" x2="210" y2="96" />
        <line x1="320" y1="430" x2="420" y2="430" strokeWidth={3.5} />
        <line x1="320" y1="434" x2="420" y2="434" />
        <line x1="470" y1="150" x2="470" y2="230" strokeWidth={3.5} />
      </g>

      {/* Stair hatching */}
      <g opacity={0.3} strokeWidth={1.2}>
        <rect x="310" y="290" width="120" height="50" />
        <line x1="330" y1="290" x2="330" y2="340" />
        <line x1="350" y1="290" x2="350" y2="340" />
        <line x1="370" y1="290" x2="370" y2="340" />
        <line x1="390" y1="290" x2="390" y2="340" />
        <line x1="410" y1="290" x2="410" y2="340" />
      </g>

      {/* Room labels */}
      <g opacity={0.6} fontFamily="monospace" fontSize="13" letterSpacing="2" fill="currentColor" stroke="none">
        <text x="180" y="190">WOHNEN</text>
        <text x="115" y="360">KÜCHE</text>
        <text x="360" y="195">ZIMMER</text>
        <text x="380" y="405">BAD</text>
      </g>

      {/* North arrow */}
      <g opacity={0.5} strokeWidth={1.4}>
        <circle cx="540" cy="120" r="22" />
        <path d="M540 104 L548 132 L540 124 L532 132 Z" strokeWidth={1} />
        <text x="540" y="158" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" stroke="none">N</text>
      </g>

      {/* Scale bar */}
      <g opacity={0.45} strokeWidth={1.2}>
        <line x1="70" y1="470" x2="190" y2="470" />
        <line x1="70" y1="465" x2="70" y2="475" />
        <line x1="110" y1="465" x2="110" y2="475" />
        <line x1="150" y1="465" x2="150" y2="475" />
        <line x1="190" y1="465" x2="190" y2="475" />
        <text x="70" y="492" fontFamily="monospace" fontSize="10" letterSpacing="1" fill="currentColor" stroke="none">0      2      4 m</text>
      </g>

      {/* Title block */}
      <g opacity={0.45} strokeWidth={1.2}>
        <rect x="320" y="455" width="210" height="75" />
        <line x1="320" y1="485" x2="530" y2="485" />
        <line x1="430" y1="485" x2="430" y2="530" />
      </g>
      <g opacity={0.7} fontFamily="monospace" fill="currentColor" stroke="none" letterSpacing="1">
        <text x="332" y="477" fontSize="14">bauitec</text>
        <text x="332" y="505" fontSize="10">GRUNDRISS · EG</text>
        <text x="332" y="520" fontSize="10">M 1:100</text>
        <text x="442" y="505" fontSize="10">BV — 2025</text>
        <text x="442" y="520" fontSize="10">POING</text>
      </g>

      {/* Corner registration marks */}
      <g opacity={0.4} strokeWidth={1.2}>
        <path d="M70 100 h-18 M70 100 v-18" />
        <path d="M470 100 h18 M470 100 v-18" />
      </g>
    </svg>
  );
}
