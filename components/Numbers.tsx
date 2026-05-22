import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { stats } from "@/lib/content";

export function Numbers() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} variant="scale">
              <div className="hover-lift h-full bg-soft p-8 hover:bg-paper">
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  <CountUp end={Number(s.value)} />
                  <span className="text-amber">{s.suffix}</span>
                </p>
                <p className="mt-3 text-base font-medium">{s.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
