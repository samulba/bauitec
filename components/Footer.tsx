import { Logo } from "./Logo";
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
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} bauitec · Inh. [Name] · Poing bei München</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-paper">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              Datenschutz
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
