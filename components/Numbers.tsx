import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

type Stat = {
  index: string;
  category: string;
  value: number;
  suffix?: string;
  label: string;
  text: string;
};

const stats: Stat[] = [
  {
    index: "01",
    category: "KPI",
    value: 93,
    suffix: "+",
    label: "Bauvorhaben",
    text: "Abgeschlossen im Großraum München.",
  },
  {
    index: "02",
    category: "Quote",
    value: 98,
    suffix: "%",
    label: "Zufriedenheit",
    text: "Bauherren würden uns weiterempfehlen.",
  },
  {
    index: "03",
    category: "Team",
    value: 7,
    label: "Eigen-Gewerke",
    text: "Bau-Gewerke in Eigenleistung. Spezialgewerke koordiniert.",
  },
  {
    index: "04",
    category: "Reichweite",
    value: 100,
    suffix: "km",
    label: "Einsatzradius",
    text: "Großraum München — auf Wunsch auch darüber hinaus.",
  },
];

const meta: { k: string; v: string }[] = [
  { k: "Kennzahlen", v: "04" },
  { k: "Stand", v: "2026" },
  { k: "Region", v: "München" },
];

export function Numbers() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-8">
              <p className="eyebrow text-stone">03 — In Zahlen</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Zahlen, die wir{" "}
                <span className="underline-amber">halten</span>.
              </h2>
            </div>
            <div className="md:col-span-4">
              <ul className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                {meta.map((m, i) => (
                  <li
                    key={m.k}
                    className={`flex items-center justify-between gap-3 py-2 ${
                      i < meta.length - 1 ? "border-b border-line" : ""
                    }`}
                  >
                    <span>{m.k}</span>
                    <span className="text-ink">{m.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-1 border-t-2 border-amber/60 sm:grid-cols-2 md:mt-20 xl:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.index}
                className="group flex flex-col gap-8 border-b border-line py-10 pr-6 sm:py-12 lg:py-14 lg:pr-8 xl:py-16 xl:pr-10 xl:[&:not(:last-child)]:border-r xl:[&:not(:last-child)]:border-line"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                    {s.index} / {s.category}
                  </span>
                  <span className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-amber" />
                </div>

                <p className="text-[3.75rem] font-semibold leading-[0.9] tracking-[-0.02em] sm:text-[5rem] md:text-[5.5rem] xl:text-[6rem]">
                  <CountUp end={s.value} />
                  {s.suffix && <span className="text-amber">{s.suffix}</span>}
                </p>

                <div>
                  <p className="text-base font-medium text-ink">{s.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
            Quelle — Eigene Auswertung &amp; Bauherren-Bewertungen · Stand 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
