import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

type Stat = {
  index: string;
  value: number;
  suffix?: string;
  label: string;
  text: string;
};

const stats: Stat[] = [
  {
    index: "01",
    value: 93,
    suffix: "+",
    label: "Bauvorhaben",
    text: "Abgeschlossene Projekte im Großraum München.",
  },
  {
    index: "02",
    value: 98,
    suffix: "%",
    label: "Zufriedenheit",
    text: "Bauherren würden uns weiterempfehlen.",
  },
  {
    index: "03",
    value: 7,
    label: "Gewerke",
    text: "Vom Aushub bis zur Übergabe in einer Hand.",
  },
  {
    index: "04",
    value: 0,
    suffix: "€",
    label: "Subunternehmer",
    text: "Eigenes Team, eigene Geräte, klare Verantwortung.",
  },
];

export function Numbers() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28">
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
                spiegelt sich in den Zahlen wider. Stand{" "}
                <span className="text-ink">2026</span>.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.index}
                className="group relative flex flex-col justify-between border-b border-line py-8 pr-6 sm:py-10 lg:py-12 lg:pr-8 lg:[&:not(:last-child)]:border-r"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-widest text-stone">
                    {s.index}
                  </span>
                  <span className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-amber" />
                </div>

                <p className="mt-10 text-5xl font-semibold tracking-tight sm:text-6xl md:text-[4.25rem] md:leading-none">
                  <CountUp end={s.value} />
                  {s.suffix && <span className="text-amber">{s.suffix}</span>}
                </p>

                <div className="mt-6">
                  <p className="text-base font-medium text-ink">{s.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
