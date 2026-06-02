import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/Icons";
import { services, site } from "@/lib/content";
import { serviceDetails } from "@/lib/serviceDetails";

const BASE = "https://www.bauitec.com";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) return {};
  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
    alternates: { canonical: `${BASE}/leistungen/${service.slug}/` },
    openGraph: {
      title: detail.seoTitle,
      description: detail.seoDescription,
      type: "article",
      locale: "de_DE",
    },
  };
}

export default async function LeistungPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: detail.seoDescription,
        serviceType: service.title,
        areaServed: { "@type": "City", name: "München" },
        provider: {
          "@type": "LocalBusiness",
          name: "Bauitec GmbH",
          telephone: site.phone,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Carl-Spitzweg-Platz 5",
            postalCode: "85586",
            addressLocality: "Poing",
            addressCountry: "DE",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: BASE + "/" },
          { "@type": "ListItem", position: 2, name: "Leistungen", item: BASE + "/#leistungen" },
          { "@type": "ListItem", position: 3, name: service.title, item: `${BASE}/leistungen/${service.slug}/` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: detail.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Nav solid />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 text-paper md:pt-36 md:pb-24">
          <div className="blueprint pointer-events-none absolute inset-0 text-amber opacity-40 [mask-image:radial-gradient(80%_70%_at_30%_20%,black,transparent)]" aria-hidden />
          <div className="pointer-events-none absolute -right-32 -top-24 h-[36rem] w-[36rem] rounded-full bg-amber/15 blur-[120px]" aria-hidden />

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2 text-paper/55">
              <Link href="/" className="hover:text-paper">Startseite</Link>
              <span aria-hidden>/</span>
              <Link href="/#leistungen" className="hover:text-paper">Leistungen</Link>
              <span aria-hidden>/</span>
              <span className="text-amber">{service.title}</span>
            </nav>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="eyebrow text-amber">Leistung {service.num} · Bauunternehmen Poing</p>
                <h1 className="mt-5 text-[2.6rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                  {service.title}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
                  {detail.intro[0]}
                </p>
                <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    prefetch={false}
                    href="/kontakt"
                    className="rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Anfrage senden →
                  </Link>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="rounded-full border border-paper/25 px-7 py-4 text-base font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              {/* Icon card */}
              <div className="hidden lg:block" aria-hidden>
                <div className="ml-auto flex h-72 w-72 items-center justify-center rounded-3xl border border-line-dark bg-ink-soft/50 text-amber backdrop-blur-sm">
                  <div className="scale-[3.5]">
                    <ServiceIcon name={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Was wir machen */}
        <section className="bg-paper">
          <div className="mx-auto max-w-[1280px] px-6 py-14 md:py-24 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div>
                  <p className="eyebrow text-stone">— Das ist dabei</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    Was wir bei {service.title} <span className="underline-amber">übernehmen</span>.
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                    {detail.intro[1]}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 rounded-xl border border-line bg-soft/60 p-4 text-sm text-ink/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-xs text-amber">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Anwendungsfälle */}
        <section className="bg-soft">
          <div className="mx-auto max-w-[1280px] px-6 py-14 md:py-24 lg:px-12">
            <Reveal>
              <p className="eyebrow text-stone">— Anwendungsfälle</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Wofür {service.title} typischerweise <span className="underline-amber">eingesetzt</span> wird.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detail.useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 80} variant="scale">
                  <article className="group h-full rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-amber/40">
                    <p className="eyebrow text-amber">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                      {u.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {u.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-14 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow text-stone">— Häufige Fragen</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  Gut zu wissen.
                </h2>
                <p className="mt-6 max-w-xs text-base leading-relaxed text-ink/65">
                  Noch etwas offen? Schreib uns einfach — wir antworten ehrlich und ohne Verkaufsdruck.
                </p>
                <Link
                  prefetch={false}
                  href="/kontakt"
                  className="mt-6 inline-flex text-sm font-medium text-amber underline-offset-4 hover:underline"
                >
                  Anfrage senden →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Faq items={detail.faq} />
            </Reveal>
          </div>
        </section>

        {/* Andere Leistungen */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-[1280px] px-6 py-14 md:py-20 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-amber">— Auch interessant</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Andere Leistungen.
                </h2>
              </div>
              <Link
                href="/#leistungen"
                className="text-sm text-paper/70 underline-offset-4 hover:text-paper hover:underline"
              >
                Alle Leistungen →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-px bg-line-dark sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  prefetch={false}
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group flex h-full flex-col bg-ink p-6 transition-colors hover:bg-ink-soft md:p-8"
                >
                  <p className="eyebrow text-stone-light">{s.num}</p>
                  <div className="mt-5 text-amber">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">
                    {s.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber transition-transform group-hover:translate-x-1">
                    Mehr erfahren →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-paper">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-6 py-14 md:flex-row md:items-center md:py-20 lg:px-12">
            <div>
              <p className="eyebrow text-stone">— Bereit?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {service.title} für dein Projekt?
              </h2>
              <p className="mt-3 max-w-md text-ink/65">
                Erstgespräch & Aufmaß kostenlos. Wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                prefetch={false}
                href="/kontakt"
                className="rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Anfrage senden →
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-ink/20 px-7 py-4 text-base font-medium text-ink transition-colors hover:border-ink/50"
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
