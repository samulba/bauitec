import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { ProgressRing } from "./ProgressRing";

export function Numbers() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-stone">03 — In Zahlen</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Zahlen, die wir{" "}
            <span className="underline-amber">halten</span>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-ink text-paper">
            <div
              className="blueprint pointer-events-none absolute inset-0 text-amber opacity-60 [mask-image:radial-gradient(120%_100%_at_85%_0%,black,transparent)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
              aria-hidden
            />

            <div className="relative grid grid-cols-1 gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
              {/* Featured tile */}
              <div className="group relative flex flex-col justify-between bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft md:p-8 lg:row-span-2">
                <span className="block h-[3px] w-10 bg-amber transition-all duration-500 group-hover:w-20" />
                <div className="mt-8 lg:mt-24">
                  <p className="text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
                    <CountUp end={93} />
                    <span className="text-amber">+</span>
                  </p>
                  <p className="mt-4 text-lg font-medium">Bauvorhaben</p>
                  <p className="mt-1 text-sm leading-relaxed text-paper/55">
                    Abgeschlossene Projekte im Großraum München — und jeden Tag
                    eins mehr.
                  </p>
                </div>
              </div>

              {/* Progress ring tile */}
              <div className="group flex flex-col items-start gap-5 bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft md:p-8">
                <ProgressRing value={98} />
                <div>
                  <p className="text-base font-medium">Zufriedenheit</p>
                  <p className="mt-1 text-sm leading-relaxed text-paper/55">
                    Kundinnen und Kunden würden uns weiterempfehlen.
                  </p>
                </div>
              </div>

              {/* Gewerke tile */}
              <Tile value={7} label="Gewerke" text="Vom Aushub bis zur Übergabe in einer Hand." />

              {/* Wide tile */}
              <div className="group relative flex flex-col justify-center bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft md:p-8 lg:col-span-2">
                <span className="block h-[3px] w-10 bg-amber transition-all duration-500 group-hover:w-20" />
                <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <p className="text-6xl font-semibold tracking-tight md:text-7xl">
                    0<span className="text-amber">€</span>
                  </p>
                  <p className="text-lg font-medium">für Subunternehmer</p>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/55">
                  Eigenes Team, eigene Geräte, klare Verantwortung — keine
                  Subunternehmer-Kette, keine Schnittstellen-Verluste.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Tile({
  value,
  label,
  text,
}: {
  value: number;
  label: string;
  text: string;
}) {
  return (
    <div className="group relative flex flex-col justify-center bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft md:p-8">
      <span className="block h-[3px] w-10 bg-amber transition-all duration-500 group-hover:w-20" />
      <p className="mt-6 text-6xl font-semibold tracking-tight md:text-7xl">
        <CountUp end={value} />
      </p>
      <p className="mt-4 text-base font-medium">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-paper/55">{text}</p>
    </div>
  );
}
