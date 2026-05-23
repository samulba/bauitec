import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Giant faint quote mark */}
      <span
        aria-hidden
        className="serif-italic pointer-events-none absolute -left-4 top-4 select-none text-[18rem] leading-none text-amber/10 md:text-[26rem]"
      >
        “
      </span>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal className="md:pt-3">
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
              <span className="text-5xl font-semibold tracking-tight text-amber md:text-6xl">
                01
              </span>
              <span className="eyebrow text-stone">Warum bauitec</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-4xl text-[1.7rem] font-medium leading-[1.25] tracking-tight sm:text-4xl md:text-[2.9rem]">
              Viele Bauvorhaben scheitern nicht am Material, sondern an{" "}
              <span className="text-stone">Abstimmung.</span> Zu viele Gewerke,
              zu wenig klare Verantwortung.{" "}
              <span className="serif-italic text-amber">
                Wir machen das anders
              </span>{" "}
              — <span className="underline-draw">eine Baustelle</span>,{" "}
              <span className="underline-draw">ein Ansprechpartner</span>,{" "}
              <span className="underline-draw">ein Übergabetermin</span>.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-8 text-sm text-ink/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Ein
              Bauleiter, ein Team
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Festpreis
              ohne Überraschungen
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" /> 5 Jahre
              Gewährleistung nach VOB
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
