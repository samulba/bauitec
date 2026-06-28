import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bauitec.com"),
  title: "bauitec — Bauunternehmen aus Poing bei München",
  description:
    "Sanierung, Innenausbau, Beton- und Gartenarbeiten — vom ersten Aushub bis zur Abnahme. In einer Hand. Mit eigenem Team. In Poing bei München.",
  keywords: [
    "Bauunternehmen Poing",
    "Sanierung München",
    "Trockenbau",
    "Betonarbeiten",
    "Fliesenverlegung",
    "Gartenbau",
    "Innenausbau München",
  ],
  openGraph: {
    title: "bauitec — Wir bauen, was bleibt.",
    description:
      "Sanierung, Innenausbau, Beton- und Gartenarbeiten — alles aus einer Hand. Eigenes Team & Gerät, koordinierte Partner für Planung, Elektrik & Sanitär. Großraum München, 100 km Radius.",
    type: "website",
    locale: "de_DE",
    siteName: "bauitec",
  },
  twitter: {
    card: "summary_large_image",
    title: "bauitec — Wir bauen, was bleibt.",
    description:
      "Sanierung, Innenausbau, Beton- und Gartenarbeiten — alles aus einer Hand. Großraum München, 100 km Radius.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Animations-Gate: setzt html[data-js] vor dem ersten Paint. Wenn das
            JS nie ausgeführt wird (Crash, langsames Netz, alter Browser), bleibt
            der Content sichtbar — keine unsichtbaren Hero-Texte mehr.
            Plus: bei bfcache-Restore werden alle CSS-Animationen kurz
            zurückgesetzt, damit nicht eingefrorene .rise-Elemente unsichtbar
            bleiben. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.setAttribute('data-js','1');
              addEventListener('pageshow', function(e){
                if(!e.persisted) return;
                document.querySelectorAll('.rise').forEach(function(el){
                  el.style.animation='none';
                  el.style.opacity='1';
                });
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
