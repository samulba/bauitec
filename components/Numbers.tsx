import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Numbers() {
  return (
    <section className="relative overflow-hidden bg-soft">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-stone">03 — In Zahlen</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Zahlen, die wir{" "}
                <span className="underline-amber">halten</span>.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-ink/60">
                Eigene Mannschaft, Festpreise, klare Übergabetermine — das
                spiegelt sich in den Zahlen. Stand{" "}
                <span className="text-ink">2026</span>.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line lg:mt-16 lg:grid-cols-5">
            {/* Hero stat — spans 3 of 5 columns on lg */}
            <div className="group relative flex flex-col justify-between bg-paper p-8 md:p-12 lg:col-span-3 lg:min-h-[28rem]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
                  01 / Bauvorhaben
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
                  Großraum München
                </span>
              </div>

              <p className="mt-12 font-semibold tracking-[-0.04em] text-[7rem] leading-[0.85] sm:text-[9rem] md:text-[12rem] lg:text-[14rem]">
                <CountUp end={93} />
                <span className="text-amber">+</span>
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xs text-base leading-relaxed text-ink/65">
                  Abgeschlossene Projekte — vom Reihenhaus bis zur
                  Komplettsanierung. Und{" "}
                  <span className="serif-italic text-ink">jeden Tag eins mehr.</span>
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                  ✚ seit 2014
                </span>
              </div>
            </div>

            {/* 3 stacked support stats */}
            <div className="grid grid-cols-1 lg:col-span-2">
              <SupportStat
                index="02"
                value={98}
                suffix="%"
                label="Zufriedenheit"
                text="Bauherren würden uns weiterempfehlen."
              />
              <SupportStat
                index="03"
                value={7}
                label="Gewerke in einer Hand"
                text="Vom Aushub bis zur schlüsselfertigen Übergabe."
              />
              <SupportStat
                index="04"
                value={0}
                suffix="€"
                label="für Subunternehmer"
                text="Eigenes Team, eigene Geräte, klare Verantwortung."
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SupportStat({
  index,
  value,
  suffix,
  label,
  text,
}: {
  index: string;
  value: number;
  suffix?: string;
  label: string;
  text: string;
}) {
  return (
    <div className="group relative flex flex-col justify-center gap-3 bg-paper p-6 transition-colors duration-300 hover:bg-soft md:p-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
          {index}
        </span>
        <span className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-amber" />
      </div>
      <div className="flex items-baseline gap-3">
        <p className="text-5xl font-semibold tracking-tight md:text-6xl">
          <CountUp end={value} />
          {suffix && <span className="text-amber">{suffix}</span>}
        </p>
        <p className="text-sm font-medium text-ink">{label}</p>
      </div>
      <p className="text-sm leading-relaxed text-ink/55">{text}</p>
    </div>
  );
}
