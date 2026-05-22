import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-amber">— Warum bauitec</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-4xl text-3xl font-medium leading-snug tracking-tight sm:text-4xl md:text-[2.75rem]">
            Viele Bauvorhaben scheitern nicht am Material, sondern an
            Abstimmung. Zu viele Gewerke, zu wenig klare Verantwortung.{" "}
            <span className="serif-italic text-amber-soft">
              Wir machen das anders
            </span>{" "}
            — <span className="underline-amber">eine Baustelle</span>,{" "}
            <span className="underline-amber">ein Ansprechpartner</span>,{" "}
            <span className="underline-amber">ein Übergabetermin</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
