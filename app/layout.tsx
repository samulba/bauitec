import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
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
  style: ["normal", "italic"],
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
      "Sanierung, Innenausbau, Beton- und Gartenarbeiten in einer Hand. Eigenes Team, eigene Geräte. Poing bei München.",
    type: "website",
    locale: "de_DE",
    siteName: "bauitec",
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
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
