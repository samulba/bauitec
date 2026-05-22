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
    text: "Kurz dein Vorhaben über das Formular oder per Anruf — Wo, was, wann.",
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
    a: `Im Großraum München, rund um Poing — etwa im Umkreis von 60 km. Bei größeren Projekten gerne auch darüber hinaus, sprich uns einfach an.`,
  },
  {
    q: "Übernehmt ihr alle Gewerke selbst?",
    a: "Ja, mit eigenem Team und eigenen Geräten — von Abbruch über Beton, Trockenbau und Fliesen bis zum Garten. Ein Ansprechpartner für alles.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Nav solid />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-paper md:pt-44 md:pb-28">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-50 [mask-image:radial-gradient(90%_80%_at_70%_20%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-32 -top-20 h-[36rem] w-[36rem] rounded-full bg-amber/15 blur-[120px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6">
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
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
                Lass uns über dein{" "}
                <span className="serif-italic text-amber">Bauvorhaben</span>{" "}
                reden.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
                Sanierung, Innenausbau, Beton- oder Gartenarbeiten — schreib uns
                kurz, was du planst, oder ruf direkt an. Wir nehmen uns Zeit.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
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
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              <Method icon={<MailIcon />} label="E-Mail" value={site.email} href={`mailto:${site.email}`} />
              <Method icon={<PhoneIcon />} label="Telefon" value={site.phone} />
              <Method icon={<PinIcon />} label="Sitz" value={site.location} />
              <Method icon={<ClockIcon />} label="Einsatzgebiet" value={site.region} />
            </div>
          </div>
        </section>

        {/* Steps + Form */}
        <section id="formular" className="scroll-mt-24 bg-soft">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
              <Reveal>
                <div>
                  <p className="eyebrow text-stone">— So geht&apos;s weiter</p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                    In drei Schritten zum{" "}
                    <span className="underline-amber">Festpreis</span>.
                  </h2>

                  <ol className="mt-10 space-y-8">
                    {steps.map((s) => (
                      <li key={s.num} className="flex gap-5">
                        <span className="font-mono text-sm text-amber">
                          {s.num}
                        </span>
                        <div>
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
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-stone">— Häufige Fragen</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Gut zu wissen.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10">
                <Faq items={faqs} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-ink text-paper">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-20">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Lieber direkt anrufen?
              </h2>
              <p className="mt-3 text-paper/65">
                Wir sind erreichbar — und beraten dich gern persönlich.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-paper/25 px-6 py-3.5 text-base font-medium transition-colors hover:border-paper/60"
              >
                {site.email}
              </a>
              <a
                href="#formular"
                className="rounded-full bg-amber px-6 py-3.5 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Anfrage senden →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Method({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group h-full bg-paper p-7 transition-colors duration-300 hover:bg-soft">
      <div className="text-amber">{icon}</div>
      <p className="eyebrow mt-5 text-stone">{label}</p>
      <p className="mt-1 text-base text-ink">{value}</p>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

const iconProps = {
  width: 24,
  height: 24,
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
