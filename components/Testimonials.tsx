import { Reveal } from "./Reveal";
import { testimonials, myHammer } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="referenzen" className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-stone">— Referenzen</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Was unsere Kunden{" "}
                <span className="underline-amber">sagen</span>.
              </h2>
            </div>
          </Reveal>

          {/* MyHammer rating badge */}
          <Reveal delay={100} variant="right">
            <a
              href={myHammer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group ml-auto flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 md:w-fit"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-lg font-semibold text-amber">
                ★
              </span>
              <span>
                <Stars />
                <span className="mt-1 block text-sm text-ink/60">
                  {myHammer.label}{" "}
                  <span className="text-amber transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} variant="scale">
              <figure className="hover-lift relative flex h-full flex-col rounded-2xl border border-line bg-paper p-7 hover:border-amber/40">
                <span
                  className="serif-italic pointer-events-none absolute right-5 top-2 select-none text-7xl leading-none text-amber/15"
                  aria-hidden
                >
                  ”
                </span>
                <Stars />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <span className="block text-sm font-medium text-ink">
                    {t.name}
                  </span>
                  <span className="eyebrow mt-1 block text-stone">
                    {t.project} · {t.date}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <a
              href={myHammer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/50 hover:bg-ink/[0.03]"
            >
              Alle Bewertungen auf MyHammer ansehen →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
