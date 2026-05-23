"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { testimonials, myHammer } from "@/lib/content";

const DURATION = 6000;

function initials(name: string) {
  return name
    .split(",")[0]
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % total), DURATION);
    return () => clearTimeout(id);
  }, [active, paused, total]);

  const t = testimonials[active];

  return (
    <section
      id="referenzen"
      className="relative overflow-hidden bg-ink py-20 text-paper md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Blueprint + glow */}
      <div
        className="blueprint pointer-events-none absolute inset-0 text-amber opacity-40 [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber/15 blur-[120px]"
        aria-hidden
      />
      {/* Giant quote glyph */}
      <span
        className="serif-italic pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 select-none text-[16rem] leading-none text-amber/10 md:text-[22rem]"
        aria-hidden
      >
        ”
      </span>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow text-amber">— Referenzen</p>
          </Reveal>

          {/* Rotating quote */}
          <div className="mt-8 flex min-h-[16rem] flex-col items-center justify-center md:min-h-[18rem]">
            <div key={active} className="quote-in flex flex-col items-center">
              <div className="flex gap-1 text-lg text-amber" aria-hidden>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <blockquote className="mt-6 max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-[2.6rem] md:leading-[1.15]">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-sm">
                <span className="font-medium text-paper">{t.name}</span>
                <span className="h-1 w-1 rounded-full bg-amber" />
                <span className="eyebrow text-stone-light">
                  {t.project} · {t.date}
                </span>
              </figcaption>
            </div>
          </div>

          {/* Avatar selector */}
          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
            {testimonials.map((rev, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Bewertung von ${rev.name}`}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold tracking-wide transition-all duration-300 sm:h-12 sm:w-12 ${
                    isActive
                      ? "scale-110 border-amber bg-amber text-ink"
                      : "border-line-dark bg-ink-soft text-paper/60 hover:border-paper/40 hover:text-paper"
                  }`}
                >
                  {initials(rev.name)}
                  {isActive && !paused && (
                    <span
                      className="pointer-events-none absolute -bottom-3 left-0 h-0.5 w-full overflow-hidden rounded-full"
                      aria-hidden
                    >
                      <span
                        className="progress-fill block h-full w-full bg-amber"
                        style={{ animationDuration: `${DURATION}ms` }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* MyHammer badge */}
          <Reveal delay={120}>
            <a
              href={myHammer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-3 rounded-full border border-line-dark bg-ink-soft/60 px-5 py-3 backdrop-blur-sm transition-colors hover:border-amber/50"
            >
              <span className="flex gap-0.5 text-amber" aria-hidden>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </span>
              <span className="text-sm text-paper/70">
                {myHammer.label}
              </span>
              <span className="text-amber transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
