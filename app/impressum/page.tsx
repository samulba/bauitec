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
            Hinweis: Bitte ergänze noch den/die Namen der
            vertretungsberechtigten Geschäftsführer (unten mit
            <span className="font-medium"> [in eckigen Klammern]</span>{" "}
            markiert).
          </p>

          <Section title="Angaben gemäß § 5 DDG">
            <p>
              Bauitec GmbH
              <br />
              Carl-Spitzweg-Platz 5
              <br />
              85586 Poing
              <br />
              Deutschland
            </p>
          </Section>

          <Section title="Handelsregister">
            <p>
              Handelsregister: 263036
              <br />
              Registergericht: Amtsgericht München
            </p>
          </Section>

          <Section title="Vertreten durch">
            <p>[Vorname] Gashi</p>
          </Section>

          <Section title="Kontakt">
            <p>
              Telefon:{" "}
              <a href="tel:+4917620269408">+49 176 20269408</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:Bauitec@outlook.com">Bauitec@outlook.com</a>
            </p>
          </Section>

          <Section title="Umsatzsteuer-ID">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              DE281976972
            </p>
          </Section>

          <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>
              [Vorname] Gashi
              <br />
              Carl-Spitzweg-Platz 5, 85586 Poing
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
              Wir nehmen an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teil. Zuständig ist die
              Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
              Straßburger Straße 8, 77694 Kehl am Rhein (
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.verbraucher-schlichter.de
              </a>
              ).
            </p>
          </Section>

          <Section title="Konzeption & Umsetzung">
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
