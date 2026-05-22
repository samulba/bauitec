# bauitec

Website für **bauitec** — Bauunternehmen aus Poing bei München.
Sanierung, Innenausbau, Beton- und Gartenarbeiten in einer Hand.

Gebaut mit [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS v4](https://tailwindcss.com), optimiert für Deployment auf Vercel.

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann auf [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Server
npm run lint    # ESLint
```

## Struktur

- `app/` — Layout, Seite, globale Styles und API-Route (`/api/contact`)
- `components/` — Sektionen (Hero, Statement, Leistungen, Prozess, Projekte, Kontakt, Footer)
- `lib/content.ts` — sämtliche Texte & Daten zentral gepflegt

## Offene Punkte

- **Kontaktformular:** `app/api/contact/route.ts` loggt die Anfrage aktuell nur. Versand (z. B. via Resend oder SMTP) muss noch angebunden werden.
- **Echte Inhalte:** Projektfotos, Telefonnummer, Impressum/Datenschutz/AGB und der Inhabername sind noch Platzhalter.
