import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — bauitec",
  description: "Informationen zur Verarbeitung personenbezogener Daten.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Nav solid />
      <main className="flex-1 bg-paper">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <p className="eyebrow text-stone">Rechtliches</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Datenschutzerklärung
          </h1>

          <p className="mt-4 rounded-lg border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-ink/70">
            Hinweis: Diese Datenschutzerklärung ist eine Vorlage mit
            Platzhaltern <span className="font-medium">[in eckigen Klammern]</span>
            . Sie muss an die tatsächlichen Verarbeitungen angepasst und vor
            Veröffentlichung rechtlich geprüft werden.
          </p>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              [Firmenname / Inhaber]
              <br />
              [Straße und Hausnummer], [PLZ] Poing
              <br />
              E-Mail: <a href="mailto:info@bauitec.com">info@bauitec.com</a>
              <br />
              Telefon: [Telefonnummer]
            </p>
          </Section>

          <Section title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer
              Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen sind in
              der Regel Art. 6 Abs. 1 lit. a (Einwilligung), lit. b
              (Vertrag/Anbahnung) und lit. f (berechtigtes Interesse) DSGVO.
            </p>
          </Section>

          <Section title="3. Hosting">
            <p>
              Diese Website wird bei <strong>Netlify</strong> gehostet (Netlify,
              Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA).
              Beim Aufruf der Seite verarbeitet der Hoster technisch notwendige
              Daten (z. B. IP-Adresse) zur Auslieferung der Inhalte.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Soweit eine
              Übermittlung in die USA erfolgt, stützt sich diese auf geeignete
              Garantien [z. B. EU-Standardvertragsklauseln / Data Privacy
              Framework].
            </p>
          </Section>

          <Section title="4. Server-Logfiles">
            <p>
              Beim Besuch der Website werden automatisch Informationen in
              sogenannten Server-Logfiles erfasst: [Browsertyp/-version,
              Betriebssystem, Referrer-URL, Hostname, Uhrzeit der Anfrage,
              IP-Adresse]. Diese Daten dienen der Sicherheit und dem
              störungsfreien Betrieb und werden nach [X Tagen] gelöscht.
            </p>
          </Section>

          <Section title="5. Kontaktformular und E-Mail-Kontakt">
            <p>
              Wenn du uns über das Kontaktformular oder per E-Mail eine Anfrage
              sendest, verarbeiten wir die von dir angegebenen Daten (Name,
              E-Mail, ggf. Telefon, Art des Bauvorhabens und deine Nachricht),
              um deine Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b und lit. a DSGVO. Die Daten werden gelöscht, sobald sie für
              den Zweck nicht mehr erforderlich sind, spätestens nach [Frist],
              soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </Section>

          <Section title="6. Cookies und Einwilligung">
            <p>
              Wir setzen technisch notwendige Cookies ein, die für den Betrieb
              der Website erforderlich sind. Optionale Cookies (z. B. für
              Statistik oder Marketing) werden nur mit deiner Einwilligung über
              unser Cookie-Banner gesetzt. Deine Auswahl wird lokal in deinem
              Browser gespeichert. Du kannst deine Einwilligung jederzeit mit
              Wirkung für die Zukunft widerrufen [Beschreibung, wie der Widerruf
              erfolgen kann, z. B. über erneuten Aufruf der
              Cookie-Einstellungen].
            </p>
          </Section>

          <Section title="7. Deine Rechte">
            <p>Dir stehen nach der DSGVO unter anderem folgende Rechte zu:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Außerdem hast du das Recht, dich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist u. a.
              das [Bayerische Landesamt für Datenschutzaufsicht (BayLDA)].
            </p>
          </Section>

          <Section title="8. Aktualität">
            <p>
              Diese Datenschutzerklärung hat den Stand [Monat/Jahr]. Wir
              behalten uns vor, sie anzupassen, um sie an geänderte
              Rechtslagen oder Verarbeitungen anzupassen.
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
