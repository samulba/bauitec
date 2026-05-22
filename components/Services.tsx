import { Reveal } from "./Reveal";
import { ServiceIcon } from "./Icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="leistungen" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-stone">02 — Leistungen</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
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

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={(i % 4) * 80} variant="scale">
              <article className="group relative flex h-full flex-col overflow-hidden bg-paper p-7 transition-colors duration-300 hover:bg-soft">
                <span
                  className="absolute right-0 top-0 h-1 w-0 bg-amber transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
                <p className="eyebrow text-stone transition-colors group-hover:text-amber">
                  {s.num} · {s.label}
                </p>
                <div className="mt-6 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
