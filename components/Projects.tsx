import { Reveal } from "./Reveal";
import { ParallaxBox } from "./ParallaxBox";
import { ProjectImage } from "./ProjectImage";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projekte" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-stone-light">
                04 — <span className="text-amber">Ausgewählte Projekte</span>
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Gebaut. <span className="underline-amber">Übergeben.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-paper/60 md:text-right md:ml-auto md:max-w-sm">
              Eine kleine Auswahl aus den letzten 24 Monaten. Mehr Referenzen
              und Details auf Anfrage.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} variant="scale">
              <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-line-dark bg-ink-soft hover:border-amber/40">
                <div className="relative aspect-[4/3] overflow-hidden bg-line-dark">
                  <ParallaxBox speed={0.06} className="absolute inset-[-12%]">
                    <ProjectImage src={p.image} alt={p.title} index={i} />
                  </ParallaxBox>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">
                    {p.text}
                  </p>
                  <p className="eyebrow mt-6 text-stone-light">
                    {p.year} · {p.duration}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
