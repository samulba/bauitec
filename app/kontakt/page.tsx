import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt — bauitec | Bauunternehmen Poing bei München",
  description:
    "Erstgespräch & Aufmaß kostenlos und unverbindlich. Schreib uns dein Bauvorhaben — wir melden uns innerhalb von 24 Stunden.",
};

const steps = [
  {
    num: "01",
    title: "Du schreibst uns",
    text: "Kurz dein Vorhaben über das Formular oder per Anruf — wo, was, wann.",
  },
  {
    num: "02",
    title: "Antwort in 24 Stunden",
    text: "Wir melden uns, klären offene Fragen und vereinbaren einen Termin vor Ort.",
  },
  {
    num: "03",
    title: "Aufmaß & Festpreis",
    text: "Kostenloses Aufmaß auf der Baustelle, danach ein klares Festpreis-Angebot.",
  },
];

const faqs = [
  {
    q: "Was kostet das Erstgespräch?",
    a: "Erstgespräch und Aufmaß vor Ort sind kostenlos und unverbindlich. Du gehst keine Verpflichtung ein, bevor das Angebot steht.",
  },
  {
    q: "Wie schnell bekomme ich eine Rückmeldung?",
    a: "In der Regel melden wir uns innerhalb von 24 Stunden nach deiner Anfrage — werktags meist noch am selben Tag.",
  },
  {
    q: "Arbeitet ihr mit Festpreisen?",
    a: "Ja. Nach dem Aufmaß erhältst du ein Angebot mit Festpreis über alle Gewerke. Keine Überraschungen auf der Schlussrechnung.",
  },
  {
    q: "In welchem Gebiet seid ihr tätig?",
    a: "Im Großraum München, rund um Poing — etwa im Umkreis von 100 km. Bei größeren Projekten gerne auch darüber hinaus, sprich uns einfach an.",
  },
  {
    q: "Übernehmt ihr alle Gewerke selbst?",
    a: "Bau-Gewerke (Sanierung, Beton, Trockenbau, Fliesen, Boden, Garten, Abbruch) machen wir mit eigenem Team und Gerät selbst. Spezialgewerke wie Elektrik, Sanitär und Reinigung sowie Planung (Architekt, Statiker) laufen über geprüfte Partner — alles über bauitec koordiniert. Ein Ansprechpartner für alles.",
  },
];

const methods: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  hint?: string;
}[] = [
  { icon: <MailIcon />, label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
  {
    icon: <PhoneIcon />,
    label: "Telefon",
    value: site.phone,
    hint: `Erreichbar ${site.hoursShort}`,
  },
  { icon: <ClockIcon />, label: "Öffnungszeiten", value: site.hours },
  { icon: <PinIcon />, label: "Sitz", value: site.location },
  { icon: <PinIcon />, label: "Einsatzgebiet", value: site.region },
];

export default function KontaktPage() {
  return (
    <>
      <Nav solid />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-paper md:pt-40 md:pb-24">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-50 [mask-image:radial-gradient(90%_80%_at_60%_10%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-32 -top-24 h-[38rem] w-[38rem] rounded-full bg-amber/15 blur-[130px]"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-line-dark bg-ink-soft/60 px-4 py-2 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                  </span>
                  <span className="eyebrow text-paper/80">
                    Antwort in 24 Stunden · Erstgespräch kostenlos
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                  Lass uns über dein{" "}
                  <span className="serif-italic text-amber">Bauvorhaben</span>{" "}
                  reden.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 sm:text-lg md:mt-8">
                  Sanierung, Innenausbau, Beton- oder Gartenarbeiten — schreib
                  uns kurz, was du planst, oder ruf direkt an. Wir nehmen uns
                  Zeit.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-10">
                  <a
                    href="#formular"
                    className="rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Anfrage senden →
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="rounded-full border border-paper/25 px-7 py-4 text-base font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
                  >
                    Direkt schreiben
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Info card */}
            <Reveal delay={250} variant="right">
              <div className="flex flex-col justify-center rounded-2xl border border-line-dark bg-ink-soft/50 p-7 backdrop-blur-sm md:p-9">
                <p className="eyebrow text-amber">Direkter Draht</p>
                <ul className="mt-6 space-y-3">
                  {methods.map((m) => {
                    const body = (
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                          {m.icon}
                        </span>
                        <div>
                          <p className="eyebrow text-stone-light">{m.label}</p>
                          <p className="mt-0.5 text-base text-paper">
                            {m.value}
                          </p>
                          {m.hint && (
                            <p className="mt-0.5 text-xs text-paper/55">
                              {m.hint}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                    return (
                      <li key={m.label}>
                        {m.href ? (
                          <a
                            href={m.href}
                            className="block rounded-xl p-2 transition-colors hover:bg-paper/5"
                          >
                            {body}
                          </a>
                        ) : (
                          <div className="p-2">{body}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 flex items-center gap-3 border-t border-line-dark pt-6">
                  <span className="text-amber" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="text-sm text-paper/70">
                    98 % Weiterempfehlung · 93+ Bauvorhaben
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Steps + Form */}
        <section id="formular" className="scroll-mt-24 bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div>
                  <p className="eyebrow text-stone">— So geht&apos;s weiter</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    In drei Schritten zum{" "}
                    <span className="underline-amber">Festpreis</span>.
                  </h2>

                  {/* Timeline */}
                  <ol className="relative mt-10">
                    <span
                      className="absolute bottom-6 left-[22px] top-6 w-px bg-line"
                      aria-hidden
                    />
                    {steps.map((s) => (
                      <li key={s.num} className="relative flex gap-6 pb-10 last:pb-0">
                        <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber bg-paper font-mono text-sm text-amber">
                          {s.num}
                        </span>
                        <div className="pt-1.5">
                          <p className="text-lg font-medium tracking-tight">
                            {s.title}
                          </p>
                          <p className="mt-1 max-w-sm text-sm leading-relaxed text-ink/65">
                            {s.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm text-ink/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    Kostenlos & unverbindlich
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div>
                  <p className="eyebrow mb-4 text-stone">— Projektanfrage</p>
                  <div className="rounded-2xl shadow-2xl shadow-ink/10 ring-1 ring-line">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-soft">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow text-stone">— Häufige Fragen</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  Gut zu wissen.
                </h2>
                <p className="mt-6 max-w-xs text-base leading-relaxed text-ink/65">
                  Noch etwas offen? Schreib uns einfach — wir antworten ehrlich
                  und ohne Verkaufsdruck.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 inline-flex text-sm font-medium text-amber underline-offset-4 hover:underline"
                >
                  {site.email} →
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </section>

        {/* CTA band */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-40 [mask-image:radial-gradient(80%_120%_at_50%_50%,black,transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-24 lg:px-12">
            <div>
              <p className="eyebrow text-amber">— Bereit?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Dein Bauvorhaben wartet nicht.
              </h2>
              <p className="mt-3 max-w-md text-paper/65">
                Erstgespräch & Aufmaß kostenlos. Wir melden uns innerhalb von 24
                Stunden.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#formular"
                className="rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Anfrage senden →
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-paper/25 px-7 py-4 text-base font-medium transition-colors hover:border-paper/60"
              >
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
