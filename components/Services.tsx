import { Reveal } from "./Reveal";
import { ServiceIcon } from "./Icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="leistungen" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-stone">02 — Leistungen</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Was wir <span className="underline-amber">machen</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-ink/70 md:text-right md:ml-auto md:max-w-md">
              Sieben Bau-Gewerke in Eigenleistung, mit eigenem Gerät. Planung,
              Elektrik, Sanitär &amp; Reinigung über geprüfte Partner — alles
              über bauitec koordiniert. Du sprichst mit einer Person, von der
              Skizze bis zum Schlüssel.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:mt-16 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80} variant="scale">
              <div className="relative flex h-full w-full flex-col overflow-hidden bg-paper p-5 text-left sm:p-7">
                <p className="eyebrow text-stone">
                  {s.num}
                  <span className="hidden sm:inline"> · {s.label}</span>
                </p>
                <div className="mt-4 text-amber sm:mt-6">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-3 text-base font-semibold tracking-tight sm:mt-5 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-ink/65 sm:block">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sub-Block: erweiterte Capabilities — koordiniert über bauitec */}
        <Reveal>
          <div className="mt-16 border-t border-line pt-10 md:mt-20 md:pt-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                  + Auch Teil deines Bauvorhabens
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Alles über uns{" "}
                  <span className="serif-italic text-amber">koordiniert</span>.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  Du brauchst nur einen Ansprechpartner — Mitat kümmert sich um
                  Partner, Planung und Equipment. Auch kleine Objekte.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:col-span-8">
                <CapabilityColumn
                  eyebrow="Planung"
                  items={["Architekt", "Statiker"]}
                />
                <CapabilityColumn
                  eyebrow="Spezial-Partner"
                  items={["Elektrik", "Sanitär", "Reinigung"]}
                />
                <CapabilityColumn
                  eyebrow="Equipment"
                  items={[
                    "Kran",
                    "Beton schneiden",
                    "Stürzen",
                    "Zimmertüren",
                    "Balkone",
                    "Schalungen",
                    "Gerüst & Zaun",
                    "Maschinen",
                  ]}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityColumn({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: string[];
}) {
  return (
    <div className="bg-paper p-5 sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
        {eyebrow}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-amber" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
