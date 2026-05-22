import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum — bauitec",
  description: "Impressum und Anbieterkennzeichnung der bauitec.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Nav solid />
      <main className="flex-1 bg-paper">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <p className="eyebrow text-stone">Rechtliches</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Impressum
          </h1>

          <p className="mt-4 rounded-lg border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-ink/70">
            Hinweis: Die folgenden Angaben enthalten Platzhalter
            <span className="font-medium"> [in eckigen Klammern]</span> und
            müssen vor Veröffentlichung durch die tatsächlichen Daten ersetzt
            und rechtlich geprüft werden.
          </p>

          <Section title="Angaben gemäß § 5 DDG">
            <p>
              [Firmenname / Bauitec]
              <br />
              [Rechtsform, z. B. Einzelunternehmen]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] Poing
              <br />
              Deutschland
            </p>
          </Section>

          <Section title="Vertreten durch">
            <p>[Vor- und Nachname des Inhabers / der Geschäftsführung]</p>
          </Section>

          <Section title="Kontakt">
            <p>
              Telefon: [Telefonnummer]
              <br />
              E-Mail:{" "}
              <a href="mailto:info@bauitec.com">info@bauitec.com</a>
            </p>
          </Section>

          <Section title="Umsatzsteuer-ID">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              [USt-IdNr., z. B. DE123456789]
            </p>
          </Section>

          <Section title="Eintragung / Handwerksrolle">
            <p>
              [Zuständige Handwerkskammer, falls zutreffend]
              <br />
              [Registernummer, falls zutreffend]
            </p>
          </Section>

          <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>
              [Vor- und Nachname]
              <br />
              [Anschrift wie oben]
            </p>
          </Section>

          <Section title="EU-Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse findest du oben im Impressum.
            </p>
          </Section>

          <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-ink/75 [&_a]:text-amber [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </section>
  );
}
