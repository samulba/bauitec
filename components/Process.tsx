import { Reveal } from "./Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="prozess" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-stone">03 — So arbeiten wir</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Vier Schritte.{" "}
            <span className="underline-amber">Klar geregelt.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Keine Black Box. Vom ersten Aufmaß bis zur Schlüsselübergabe weißt
            du jederzeit, wo wir stehen — und was als nächstes passiert.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 90}>
              <div className="pt-5">
                <span className="block h-[3px] w-10 bg-amber" aria-hidden />
                <p className="eyebrow mt-5 text-stone">{step.num}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
