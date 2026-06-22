import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="kontakt" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow text-stone">05 — Kontakt</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Lass uns über dein{" "}
                <span className="underline-amber">Bauvorhaben</span> reden.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                Schreib uns kurz, was du planst — oder ruf an. Erstgespräch &
                Aufmaß sind kostenlos und unverbindlich. Wir melden uns
                innerhalb von 24 Stunden zurück.
              </p>

              <dl className="mt-10 space-y-5 border-t border-line pt-8">
                {[
                  { label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
                  { label: "Telefon", value: site.phone },
                  { label: "Sitz", value: site.location },
                  { label: "Einsatzgebiet", value: site.region },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline gap-6">
                    <dt className="eyebrow w-28 shrink-0 text-stone">
                      {row.label}
                    </dt>
                    <dd className="text-base text-ink">
                      {row.href ? (
                        <a className="hover:text-amber" href={row.href}>
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
