import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { stats } from "@/lib/content";

export function Numbers() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow text-stone">— bauitec in Zahlen</p>
            <p className="hidden max-w-xs text-right text-sm text-ink/55 sm:block">
              Stand heute — und jeden Tag ein Bauvorhaben mehr.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-ink text-paper">
            {/* Blueprint grid + glow */}
            <div
              className="blueprint pointer-events-none absolute inset-0 text-amber opacity-60 [mask-image:radial-gradient(120%_100%_at_85%_0%,black,transparent)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
              aria-hidden
            />

            <div className="relative grid grid-cols-1 gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft md:p-10"
                >
                  <span
                    className="absolute left-0 top-0 h-0.5 w-0 bg-amber transition-all duration-500 group-hover:w-full"
                    aria-hidden
                  />
                  <p className="text-6xl font-semibold tracking-tight md:text-7xl">
                    <CountUp end={Number(s.value)} />
                    <span className="text-amber">{s.suffix}</span>
                  </p>
                  <p className="mt-4 text-base font-medium">{s.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-paper/55">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
