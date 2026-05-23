import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seite nicht gefunden — bauitec",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav solid />
      <main className="flex flex-1 items-center">
        <section className="relative w-full overflow-hidden bg-ink py-32 text-paper md:py-44">
          <div
            className="blueprint pointer-events-none absolute inset-0 text-amber opacity-40 [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber/15 blur-[120px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl px-6 text-center">
            <p className="eyebrow text-amber">Fehler 404</p>
            <p className="mt-6 text-[5.5rem] font-semibold leading-none tracking-tight text-amber sm:text-[8rem]">
              404
            </p>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Diese Seite haben wir nicht gebaut.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/70">
              Die Seite gibt es nicht (mehr) oder die Adresse ist falsch. Kein
              Problem — zurück zur Startseite oder direkt eine Anfrage stellen.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                prefetch={false}
                href="/"
                className="rounded-full bg-amber px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Zur Startseite
              </Link>
              <Link
                prefetch={false}
                href="/kontakt"
                className="rounded-full border border-paper/25 px-7 py-4 text-base font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"
              >
                Anfrage senden →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
