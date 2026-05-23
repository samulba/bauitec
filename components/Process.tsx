"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/lib/content";

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.idx));
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const total = process.length;
  const fill = ((active + 1) / total) * 100;

  return (
    <section id="prozess" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Sticky overview */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-stone">03 — So arbeiten wir</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Vier Schritte.{" "}
              <span className="underline-amber">Klar geregelt.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Keine Black Box. Vom ersten Aufmaß bis zur Schlüsselübergabe weißt
              du jederzeit, wo wir stehen — und was als nächstes passiert.
            </p>

            {/* Live step counter (desktop) */}
            <div className="mt-10 hidden items-end gap-4 lg:flex">
              <span className="text-7xl font-semibold leading-none tracking-tight text-amber tabular-nums">
                0{active + 1}
              </span>
              <span className="mb-1 text-lg text-stone">/ 0{total}</span>
            </div>
            <p className="mt-3 hidden text-lg font-medium tracking-tight lg:block">
              {process[active].title}
            </p>

            {/* Segmented progress */}
            <div className="mt-6 hidden gap-2 lg:flex">
              {process.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i <= active ? "bg-amber" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Steps timeline */}
          <div className="relative">
            {/* track */}
            <span
              className="absolute bottom-0 left-[7px] top-0 w-px bg-line lg:left-[9px]"
              aria-hidden
            />
            <span
              className="absolute left-[7px] top-0 w-px bg-amber transition-[height] duration-500 ease-out lg:left-[9px]"
              style={{ height: `${fill}%` }}
              aria-hidden
            />

            {process.map((step, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <div
                  key={step.num}
                  data-idx={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className="relative py-7 pl-10 lg:min-h-[56vh] lg:py-0 lg:pl-14 lg:flex lg:flex-col lg:justify-center"
                >
                  {/* node */}
                  <span
                    className={`absolute left-0 top-12 h-4 w-4 rounded-full border-2 transition-all duration-500 lg:top-1/2 lg:h-5 lg:w-5 lg:-translate-y-1/2 ${
                      isActive
                        ? "border-amber bg-amber scale-110"
                        : isPast
                          ? "border-amber bg-amber"
                          : "border-line bg-paper"
                    }`}
                    aria-hidden
                  />
                  <div
                    className={`transition-all duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-40 lg:opacity-30"
                    }`}
                  >
                    <p className="eyebrow text-amber">{step.num}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-ink/70">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
