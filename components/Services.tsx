import Link from "next/link";
import { Reveal } from "./Reveal";
import { ServiceIcon } from "./Icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="leistungen" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28">
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
            <Reveal key={s.slug} delay={(i % 4) * 80} variant="scale">
              <Link
                prefetch={false}
                href={`/leistungen/${s.slug}`}
                className="group relative flex h-full w-full flex-col overflow-hidden bg-paper p-5 text-left transition-colors duration-300 hover:bg-soft active:bg-soft sm:p-7"
              >
                <span
                  className="absolute right-0 top-0 h-1 w-0 bg-amber transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
                <p className="eyebrow text-stone transition-colors group-hover:text-amber">
                  {s.num}
                  <span className="hidden sm:inline"> · {s.label}</span>
                </p>
                <div className="mt-4 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 sm:mt-6">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-3 text-base font-semibold tracking-tight sm:mt-5 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-ink/65 sm:block">
                  {s.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-amber transition-transform group-hover:translate-x-1 sm:mt-5 sm:text-sm">
                  Mehr erfahren →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
