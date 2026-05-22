"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function Hero() {
  const monoRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mono = monoRef.current;
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
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      mx = ((e.clientX - r.width / 2) / r.width) * 30;
      my = ((e.clientY - r.height / 2) / r.height) * 30;
      schedule();
    };
    const onScroll = () => {
      sy = window.scrollY * 0.12;
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
      className="relative overflow-hidden bg-paper pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* Blueprint grid */}
      <div
        className="blueprint pointer-events-none absolute inset-0 text-ink [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]"
        aria-hidden
      />

      {/* Parallax B monogram */}
      <span
        ref={monoRef}
        aria-hidden
        className="serif-italic pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[34rem] leading-none text-amber/[0.10] lg:block"
      >
        B
      </span>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.55fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <p className="eyebrow text-stone">
              01 — Bauunternehmen · Poing bei München
            </p>
          </Reveal>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
            <Reveal delay={80} as="span" className="block">
              Wir bauen,
            </Reveal>
            <Reveal delay={170} as="span" className="block">
              <span className="mark">was&nbsp;bleibt.</span>
            </Reveal>
            <Reveal delay={260} as="span" variant="left" className="block">
              <span className="serif-italic text-stone">
                nicht das Versprechen.
              </span>
            </Reveal>
          </h1>

          <Reveal delay={360}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              Sanierung, Innenausbau, Beton- und Gartenarbeiten — vom ersten
              Aushub bis zur Abnahme. In einer Hand. Mit eigenem Team. In Poing
              bei München.
            </p>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="group relative overflow-hidden rounded-full bg-amber px-7 py-3.5 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Projekt anfragen →</span>
                <span className="absolute inset-0 -translate-x-full bg-ink/10 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href="#leistungen"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/50 hover:bg-ink/[0.03]"
              >
                Leistungen ansehen
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={520} variant="right" className="lg:pb-2">
          <div className="space-y-5 border-l-2 border-amber pl-5">
            <div>
              <p className="text-3xl font-semibold tracking-tight">93+</p>
              <p className="text-sm text-stone">Bauvorhaben</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight">98%</p>
              <p className="text-sm text-stone">Kundenzufriedenheit</p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink/80">
                Eigenes Team · Eigene Geräte
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <div className="relative mx-auto mt-16 max-w-6xl px-6 md:mt-24">
        <Reveal delay={620}>
          <div className="flex items-center gap-3 text-stone">
            <span className="relative flex h-9 w-5 justify-center rounded-full border border-stone/50">
              <span className="mt-1.5 h-1.5 w-1 animate-bounce rounded-full bg-amber" />
            </span>
            <span className="eyebrow">Scroll</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
