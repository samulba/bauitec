"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Hero() {
  const monoRef = useRef<HTMLSpanElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mono = monoRef.current;
    const glow = glowRef.current;
    const section = sectionRef.current;
    if (!mono || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let mx = 0;
    let my = 0;
    let sy = 0;

    const apply = () => {
      raf = 0;
      mono.style.transform = `translate3d(${mx}px, ${my + sy}px, 0)`;
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
      {/* Parallax B monogram */}
      <span
        ref={monoRef}
        aria-hidden
        className="serif-italic pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 select-none text-[40rem] leading-none text-amber/[0.14] lg:block"
      >
        B
      </span>

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
            <span className="mark">was&nbsp;bleibt.</span>
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
