import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* Faint B monogram */}
      <span
        aria-hidden
        className="serif-italic pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[34rem] leading-none text-ink/[0.06] lg:block"
      >
        B
      </span>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.55fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <p className="eyebrow text-stone">
              01 — Bauunternehmen · Poing bei München
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
              Wir bauen,
              <br />
              <span className="mark">was&nbsp;bleibt.</span>
              <br />
              <span className="serif-italic text-stone">
                nicht das Versprechen.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              Sanierung, Innenausbau, Beton- und Gartenarbeiten — vom ersten
              Aushub bis zur Abnahme. In einer Hand. Mit eigenem Team. In Poing
              bei München.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="rounded-full bg-amber px-7 py-3.5 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Projekt anfragen →
              </a>
              <a
                href="#leistungen"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/50"
              >
                Leistungen ansehen
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="lg:pb-2">
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
    </section>
  );
}
