import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum — bauitec",
  description: "Impressum und Anbieterkennzeichnung der Bauitec GmbH.",
  robots: { index: false, follow: true },
};

const sections = [
  {
    num: "01",
    title: "Angaben gemäß § 5 DDG",
    content: (
      <p>
        Bauitec GmbH
        <br />
        Carl-Spitzweg-Platz 5
        <br />
        85586 Poing
        <br />
        Deutschland
      </p>
    ),
  },
  {
    num: "02",
    title: "Handelsregister",
    content: (
      <p>
        Handelsregister: 263036
        <br />
        Registergericht: Amtsgericht München
      </p>
    ),
  },
  {
    num: "03",
    title: "Vertreten durch",
    content: <p>Mitat</p>,
  },
  {
    num: "04",
    title: "Kontakt",
    content: (
      <p>
        Telefon: <a href="tel:+4981214739307">+49 8121 4739307</a>
        <br />
        E-Mail: <a href="mailto:bauitec@outlook.com">bauitec@outlook.com</a>
      </p>
    ),
  },
  {
    num: "05",
    title: "Umsatzsteuer-ID",
    content: (
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE281976972
      </p>
    ),
  },
  {
    num: "06",
    title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    content: (
      <p>
        Mitat
        <br />
        Carl-Spitzweg-Platz 5, 85586 Poing
      </p>
    ),
  },
  {
    num: "07",
    title: "EU-Streitschlichtung",
    content: (
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        . Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>
    ),
  },
  {
    num: "08",
    title: "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
    content: (
      <p>
        Wir nehmen an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teil. Zuständig ist die
        Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
        Straßburger Straße 8, 77694 Kehl am Rhein (
        <a
          href="https://www.verbraucher-schlichter.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          verbraucher-schlichter.de
        </a>
        ).
      </p>
    ),
  },
  {
    num: "09",
    title: "Konzeption & Umsetzung",
    content: (
      <p>
        Webdesign, Entwicklung und Umsetzung dieser Website:{" "}
        <a
          href="https://www.framepath.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Framepath
        </a>
        .
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Nav solid />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-paper md:pt-40 md:pb-24">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-30 [mask-image:radial-gradient(70%_60%_at_30%_25%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-40 -top-32 h-[40rem] w-[40rem] rounded-full bg-amber/15 blur-[140px]"
            aria-hidden
          />
          <span
            aria-hidden
            className="serif-italic pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none text-[16rem] leading-none text-amber/[0.07] md:text-[24rem]"
          >
            §
          </span>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2 text-paper/55">
              <Link href="/" className="hover:text-paper">Startseite</Link>
              <span aria-hidden>/</span>
              <span className="text-amber">Impressum</span>
            </nav>
            <p className="eyebrow mt-10 text-amber">— Rechtliches</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Impressum.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
              Anbieterkennzeichnung und gesetzliche Pflichtangaben der Bauitec
              GmbH gemäß § 5 DDG und § 18 Abs. 2 MStV.
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              {/* Sticky quick info */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="overflow-hidden rounded-3xl border border-line bg-soft">
                  <div className="border-b border-line bg-paper px-6 py-5">
                    <p className="eyebrow text-stone">Auf einen Blick</p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight">
                      Bauitec GmbH
                    </p>
                    <p className="mt-1 text-sm text-ink/60">
                      Bauunternehmen aus Poing bei München
                    </p>
                  </div>
                  <dl className="divide-y divide-line/70">
                    <Row label="Adresse">
                      Carl-Spitzweg-Platz 5<br />
                      85586 Poing
                    </Row>
                    <Row label="E-Mail" href="mailto:bauitec@outlook.com">
                      bauitec@outlook.com
                    </Row>
                    <Row label="Telefon" href="tel:+4981214739307">
                      +49 8121 4739307
                    </Row>
                    <Row label="Geschäftsführer">Mitat</Row>
                    <Row label="HRB">263036 · AG München</Row>
                    <Row label="USt-IdNr.">DE281976972</Row>
                  </dl>
                </div>
              </aside>

              {/* Sections */}
              <div className="space-y-4">
                {sections.map((s) => (
                  <article
                    key={s.num}
                    className="group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-amber/40 hover:bg-soft/40 md:p-7"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-mono text-sm font-semibold text-amber">
                        {s.num}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                          {s.title}
                        </h2>
                        <div className="mt-3 leading-relaxed text-ink/75 [&_a]:text-amber [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:no-underline">
                          {s.content}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Row({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const value = href ? (
    <a className="text-ink transition-colors hover:text-amber" href={href}>
      {children}
    </a>
  ) : (
    <span className="text-ink">{children}</span>
  );
  return (
    <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:gap-6">
      <dt className="eyebrow w-24 shrink-0 text-stone">{label}</dt>
      <dd className="text-sm leading-relaxed sm:text-base">{value}</dd>
    </div>
  );
}
