"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ServiceIcon } from "./Icons";
import { Modal } from "./Modal";
import { services } from "@/lib/content";

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? services[openIdx] : null;

  return (
    <section id="leistungen" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-stone">02 — Leistungen</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Was wir <span className="underline-amber">machen</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-ink/70 md:text-right md:ml-auto md:max-w-md">
              Sieben Gewerke, eigenes Gerät, ein Team. Wir nehmen das
              Bauvorhaben in einer Hand — vom Aushub bis zur letzten Fuge. Keine
              Subunternehmer-Kette, keine Schnittstellen-Verluste.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:mt-16 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={(i % 4) * 80} variant="scale">
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="group relative flex h-full w-full flex-col overflow-hidden bg-paper p-5 text-left transition-colors duration-300 hover:bg-soft sm:p-7"
              >
                <span
                  className="absolute right-0 top-0 h-1 w-0 bg-amber transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
                <p className="eyebrow text-stone transition-colors group-hover:text-amber">
                  {s.num} · {s.label}
                </p>
                <div className="mt-5 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 sm:mt-6">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight sm:mt-5 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-ink/65 sm:block">
                  {s.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-amber sm:mt-5 sm:text-sm sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                  Mehr →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setOpenIdx(null)}
        label={active?.title}
      >
        {active && (
          <>
            <p className="eyebrow text-stone">
              {active.num} · Leistung
            </p>
            <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-soft text-amber">
              <ServiceIcon name={active.icon} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              {active.long}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {active.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber/15 text-[10px] text-amber">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
              <a
                href="/kontakt"
                className="inline-flex justify-center rounded-full bg-amber px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Projekt anfragen →
              </a>
              <button
                type="button"
                onClick={() => setOpenIdx(null)}
                className="inline-flex justify-center rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
              >
                Schließen
              </button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
