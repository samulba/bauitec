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

const highlights = [
  {
    title: "Festpreis-Garantie",
    text: "Ein Angebot, ein Preis, alle Gewerke — keine Überraschungen auf der Schlussrechnung.",
  },
  {
    title: "Eigenes Team & Gerät",
    text: "Kein Subunternehmer-Chaos. Ein Ansprechpartner, eine klare Verantwortung.",
  },
  {
    title: "5 Jahre Gewährleistung",
    text: "Sauber abgenommen, ordentlich übergeben — Gewährleistung nach VOB.",
  },
];

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

  const steps = [
    {
      num: "01",
      title: "Erstgespräch & Aufmaß",
      text: "Wir kommen vorbei, schauen uns die Baustelle an und nehmen Maß. Kostenlos, unverbindlich, vor Ort.",
    },
    {
      num: "02",
      title: "Festpreis-Angebot",
      text: "Ein Angebot, ein Preis, alle Gewerke. Innerhalb weniger Tage nach dem Aufmaß.",
    },
    {
      num: "03",
      title: `${service.title} & Übergabe`,
      text: "Ein Bauleiter, ein Team, wöchentliche Updates — bis zur sauberen Übergabe.",
    },
  ];

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

        {/* HERO — dramatic with giant watermark number */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-paper md:pt-40 md:pb-24">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-40 [mask-image:radial-gradient(70%_60%_at_30%_25%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-40 -top-32 h-[44rem] w-[44rem] rounded-full bg-amber/20 blur-[140px]"
            aria-hidden
          />
          {/* Giant watermark number */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-[-3rem] top-1/2 -translate-y-1/2 select-none font-semibold leading-none tracking-tighter text-amber/[0.06] text-[20rem] md:right-[-4rem] md:text-[32rem] xl:text-[40rem]"
          >
            {service.num}
          </span>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2 text-paper/55">
              <Link href="/" className="hover:text-paper">Startseite</Link>
              <span aria-hidden>/</span>
              <Link href="/#leistungen" className="hover:text-paper">Leistungen</Link>
              <span aria-hidden>/</span>
              <span className="text-amber">{service.title}</span>
            </nav>

            <div className="mt-12 max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-line-dark bg-ink-soft/60 px-4 py-2 backdrop-blur-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber/15 text-amber">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="eyebrow text-paper/80">
                  Leistung {service.num} · Bauunternehmen Poing
                </span>
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                {service.title}.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg md:text-xl">
                {detail.intro[0]}
              </p>

              <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
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
          </div>
        </section>

        {/* HIGHLIGHTS — three promises band */}
        <section className="bg-ink-soft text-paper">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 lg:px-12">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-3">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 90} variant="scale">
                  <div className="group flex h-full flex-col bg-ink p-7 transition-colors hover:bg-[#221d17] md:p-8">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/15 text-amber">
                      <span className="text-base font-semibold">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">
                      {h.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WAS WIR MACHEN — editorial */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <Reveal>
                <div>
                  <p className="eyebrow text-stone">— Das ist dabei</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[3.25rem] md:leading-[1.05]">
                    Was wir bei {service.title} <span className="underline-amber">übernehmen</span>.
                  </h2>
                  <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70">
                    {detail.intro[1]}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul className="space-y-3">
                  {service.points.map((p, i) => (
                    <li
                      key={p}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-soft/50 p-5 transition-colors hover:border-amber/40 hover:bg-soft"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber text-sm font-semibold text-ink">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium text-ink">{p}</span>
                      <span className="ml-auto text-amber transition-transform group-hover:translate-x-1">→</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ANWENDUNGSFÄLLE — bento with big numbers */}
        <section className="relative overflow-hidden bg-soft">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <div>
                  <p className="eyebrow text-stone">— Anwendungsfälle</p>
                  <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[3.25rem] md:leading-[1.05]">
                    Wofür {service.title} typischerweise <span className="underline-amber">eingesetzt</span> wird.
                  </h2>
                </div>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {detail.useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 90} variant="scale">
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-7 transition-all hover:border-amber/50 hover:shadow-xl hover:shadow-ink/5 md:p-8">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-6 select-none text-[6rem] font-semibold leading-none text-amber/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-amber/20"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow relative text-amber">
                      Anwendungsfall {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="relative mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                      {u.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
                      {u.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABLAUF — tailored 3 steps */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
            <Reveal>
              <p className="eyebrow text-stone">— So läuft&apos;s ab</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[3.25rem] md:leading-[1.05]">
                In drei Schritten zum <span className="underline-amber">Festpreis</span>.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 110} variant="left">
                  <div className="group relative h-full">
                    {/* connector */}
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-[3.25rem] top-7 hidden h-px w-[calc(100%-3rem)] bg-line md:block"
                      />
                    )}
                    <div className="flex items-start gap-5">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-amber bg-paper text-lg font-semibold text-amber transition-transform group-hover:scale-105">
                        {s.num}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/65 sm:text-base">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — editorial */}
        <section className="bg-soft">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow text-stone">— Häufige Fragen</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[3.25rem] md:leading-[1.05]">
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

        {/* ANDERE LEISTUNGEN */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
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
                  <div className="mt-5 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
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

        {/* FINAL CTA — dramatic */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-40 [mask-image:radial-gradient(80%_120%_at_50%_50%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/15 blur-[120px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow text-amber">— Bereit?</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
                  Lass uns dein {service.title}-Projekt <span className="serif-italic text-amber">anpacken</span>.
                </h2>
                <p className="mt-5 max-w-md text-paper/70">
                  Erstgespräch & Aufmaß kostenlos. Festpreis-Angebot innerhalb weniger Tage. Wir melden uns innerhalb von 24 Stunden zurück.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:justify-end">
                <Link
                  prefetch={false}
                  href="/kontakt"
                  className="rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  Anfrage senden →
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-full border border-paper/25 px-7 py-4 text-base font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
