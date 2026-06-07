import Link from "next/link";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Leistungen",
    links: [
      "Sanierung",
      "Betonarbeiten",
      "Trockenbau",
      "Fliesen & Boden",
      "Garten & Abbruch",
    ],
  },
  {
    title: "Studio",
    links: ["Prozess", "Projekte", "Kontakt"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1680px] px-6 py-16 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo size="text-3xl" />
            <p className="serif-italic mt-5 text-2xl text-paper/80">
              {site.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-amber">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow text-amber">Kontakt</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li>{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-line-dark pt-8 text-sm text-paper/50">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <p>© {new Date().getFullYear()} Bauitec GmbH · Poing bei München</p>
              <a
                href="https://www.framepath.de"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Designed & built by Framepath"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line-dark/80 bg-ink-soft/40 py-1.5 pl-1.5 pr-3.5 text-xs text-paper/65 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber/60 hover:bg-ink-soft/70 hover:text-paper"
              >
                <span
                  aria-hidden
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-amber/15 font-mono text-[10px] font-semibold text-amber transition-colors group-hover:bg-amber group-hover:text-ink"
                >
                  F
                </span>
                <span className="eyebrow text-paper/45 transition-colors group-hover:text-paper/70">
                  Designed by
                </span>
                <span className="font-medium tracking-tight text-paper">
                  Framepath
                </span>
                <span
                  aria-hidden
                  className="text-amber transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link prefetch={false} href="/impressum" className="transition-colors hover:text-paper">
                Impressum
              </Link>
              <Link prefetch={false} href="/datenschutz" className="transition-colors hover:text-paper">
                Datenschutz
              </Link>
              <CookieSettingsButton className="transition-colors hover:text-paper" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
