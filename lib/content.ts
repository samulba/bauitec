export const site = {
  name: "bauitec",
  tagline: "Wir bauen, was bleibt.",
  email: "bauiitec@outlook.com",
  phone: "+49 8121 4739307",
  location: "Poing bei München",
  region: "Großraum München · 100 km Radius",
  hours: "Mo–Fr 08:00–17:00 Uhr",
  hoursShort: "Mo–Fr 8–17 Uhr",
};

export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Prozess", href: "/#prozess" },
  { label: "Projekte", href: "/#projekte" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/kontakt" },
];

export type Service = {
  num: string;
  slug: string;
  label: string;
  title: string;
  text: string;
  icon: string;
  long: string;
  points: string[];
};

export const services: Service[] = [
  {
    num: "01",
    slug: "sanierung",
    label: "Sanierung",
    title: "Sanierung",
    text: "Komplettsanierung von Wohn- und Geschäftsräumen. Abriss, Estrich, Trockenbau, Boden, Fliesen — in einem Zug.",
    icon: "renovation",
    long: "Wir sanieren Wohnungen, Häuser und Gewerbeflächen komplett — von der Entkernung bis zur bezugsfertigen Übergabe. Alle Gewerke laufen koordiniert ineinander, damit dein Projekt ohne Leerlauf und ohne Schnittstellen-Chaos fertig wird.",
    points: [
      "Entkernung & Abbruch",
      "Estrich, Trockenbau & Boden",
      "Bäder, Fliesen & Maler",
      "Termin- und Festpreisgarantie",
    ],
  },
  {
    num: "02",
    slug: "betonarbeiten",
    label: "Betonarbeiten",
    title: "Betonarbeiten",
    text: "Fundamente, Bodenplatten, Stützmauern. Eigene Schalungen, eigene Geräte — auch für komplexe Geometrien.",
    icon: "concrete",
    long: "Vom Fundament bis zur Stützmauer: Wir schalen, bewehren und betonieren mit eigenem Gerät — auch bei anspruchsvollen Geometrien und beengten Baustellen.",
    points: [
      "Fundamente & Bodenplatten",
      "Stützmauern & Winkelsteine",
      "Eigene Schalungen",
      "Sichtbeton auf Wunsch",
    ],
  },
  {
    num: "03",
    slug: "trockenbau",
    label: "Trockenbau",
    title: "Trockenbau",
    text: "Wände, Decken, abgehängte Konstruktionen. Brandschutz und Schallschutz nach DIN — sauber verspachtelt.",
    icon: "drywall",
    long: "Wände, Decken und abgehängte Konstruktionen — sauber geplant und verspachtelt. Brand- und Schallschutz setzen wir normgerecht nach DIN um.",
    points: [
      "Trennwände & Vorsatzschalen",
      "Abgehängte Decken",
      "Brandschutz F30–F90",
      "Schallschutz nach DIN",
    ],
  },
  {
    num: "04",
    slug: "fliesenverlegung",
    label: "Fliesenverlegung",
    title: "Fliesenverlegung",
    text: "Bad, Küche, Außenbereich. Großformat, Mosaik, XXL-Platten — präzise verfugt, sauber abgesetzt.",
    icon: "tiles",
    long: "Ob Bad, Küche oder Außenbereich — wir verlegen Groß- und Kleinformate präzise, mit sauberen Fugen und sauberem Abschluss.",
    points: [
      "Groß- & XXL-Formate",
      "Mosaik & Naturstein",
      "Bäder & Nassbereiche",
      "Außen- & Terrassenbeläge",
    ],
  },
  {
    num: "05",
    slug: "bodenbelaege",
    label: "Bodenbeläge",
    title: "Bodenbeläge",
    text: "Parkett, Vinyl, Laminat, Estrich. Vom Untergrund bis zur fertigen Oberfläche — alle Beläge, alle Räume.",
    icon: "floor",
    long: "Vom Untergrund bis zur fertigen Oberfläche: Wir bereiten den Boden vor und verlegen den passenden Belag — fachgerecht und langlebig.",
    points: [
      "Parkett & Laminat",
      "Vinyl & Designboden",
      "Estrich & Spachtelung",
      "Untergrund-Vorbereitung",
    ],
  },
  {
    num: "06",
    slug: "gartenbau",
    label: "Gartenbau",
    title: "Gartenbau",
    text: "Pflasterung, Hochbeete, Zäune, Terrassen. Außenanlagen mit Charakter — solide gebaut, sauber abgesetzt.",
    icon: "garden",
    long: "Außenanlagen mit Charakter: Pflaster, Terrassen, Hochbeete und Zäune — solide gebaut und sauber abgesetzt, mit eigenem Bagger.",
    points: [
      "Pflaster & Wege",
      "Terrassen & Sichtschutz",
      "Hochbeete & Einfassungen",
      "Erd- & Aushubarbeiten",
    ],
  },
  {
    num: "07",
    slug: "abbruch",
    label: "Abbruch",
    title: "Abbruch",
    text: "Selektiver Rückbau und Komplettabbruch. Eigene Bagger, eigene Container — Entsorgung inklusive.",
    icon: "demolition",
    long: "Selektiver Rückbau oder Komplettabbruch — inklusive fachgerechter Trennung und Entsorgung. Auch Sondermüll wie Asbest und Eternit nach Vorschrift.",
    points: [
      "Selektiver Rückbau",
      "Komplettabbruch",
      "Sondermüll (Asbest/Eternit)",
      "Container & Abtransport",
    ],
  },
  {
    num: "08",
    slug: "eigene-geraete",
    label: "Eigene Geräte",
    title: "Eigene Geräte",
    text: "Gerüst, Zaun, Schalungen, Bagger — alles im eigenen Bestand. Keine Mietgeräte, keine Wartezeiten.",
    icon: "machinery",
    long: "Gerüst, Bauzaun, Schalungen und Bagger gehören uns selbst. Das heißt: keine Mietkosten, keine Wartezeiten und volle Flexibilität auf der Baustelle.",
    points: [
      "Bagger & Baumaschinen",
      "Gerüst & Bauzaun",
      "Schalungssysteme",
      "Sofort verfügbar",
    ],
  },
];

export const stats = [
  { value: "93", suffix: "+", label: "Bauvorhaben", text: "Abgeschlossene Projekte im Großraum München" },
  { value: "98", suffix: "%", label: "Zufriedenheit", text: "Kundinnen und Kunden würden uns weiterempfehlen" },
  { value: "7", suffix: "", label: "Gewerke", text: "Vom Aushub bis zur Übergabe in einer Hand" },
  { value: "100", suffix: "km", label: "Einsatzradius", text: "Großraum München — auf Wunsch auch darüber hinaus" },
];

export const process = [
  {
    num: "01",
    title: "Erstgespräch & Aufmaß",
    text: "Wir kommen vorbei, schauen uns die Baustelle an und nehmen Maß. Kostenlos, unverbindlich, vor Ort.",
  },
  {
    num: "02",
    title: "Festpreis-Angebot",
    text: "Ein Angebot, ein Preis, alle Gewerke. Keine Überraschungen auf der Schlussrechnung.",
  },
  {
    num: "03",
    title: "Bau in einer Hand",
    text: "Ein Bauleiter, ein Team, ein Ansprechpartner. Tägliche Erreichbarkeit, wöchentliche Updates.",
  },
  {
    num: "04",
    title: "Übergabe & Garantie",
    text: "Sauber abgenommen, ordentlich übergeben. 5 Jahre Gewährleistung nach VOB.",
  },
];

export type Project = {
  tag: string;
  title: string;
  text: string;
  year: string;
  duration: string;
  image?: string;
};

export const projects: Project[] = [
  {
    tag: "Sanierung · Wohnhaus",
    title: "Komplettsanierung Einfamilienhaus",
    text: "Innen und außen aus einer Hand: neue Böden, Trockenbau, Bäder, Fassade und Außenanlage. Vom unsanierten Bestand zum bezugsfertigen Zuhause.",
    year: "2025",
    duration: "4 Monate",
    image: "/projekt-haus.webp",
  },
  {
    tag: "Garten · Außenanlage",
    title: "Neue Außenanlage mit Pflasterung & Hochbeet",
    text: "180 m² Pflaster, drei Hochbeete, neuer Sichtschutzzaun. Eigene Bagger, drei Wochen, ein Ansprechpartner.",
    year: "2025",
    duration: "3 Wochen",
    image: "/projekt-garten.webp",
  },
  {
    tag: "Trockenbau · Büro",
    title: "Bürotrockenbau mit Brandschutz F30",
    text: "240 m² Trennwände, abgehängte Decken, Akustikplatten. F30-Brandschutz nach DIN — sauber verspachtelt, übergeben.",
    year: "2024",
    duration: "5 Wochen",
    image: "/projekt-buero.webp",
  },
];

export const myHammer = {
  url: "https://www.my-hammer.de/auftragnehmer/bauitec-gmbh",
  label: "Echte Bewertungen auf MyHammer",
};

// Echte MyHammer-Bewertungen (übernommen vom MyHammer-Profil).
export type Testimonial = {
  quote: string;
  name: string;
  project: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Absolut zu empfehlen. Sehr freundlich, zuverlässig, absolut professionell und sorgfältig. Vielen Dank für die tolle Arbeit!",
    name: "Laura Ebert, München",
    project: "Entrümpelung",
    date: "Nov 2024",
  },
  {
    quote:
      "Alles prima — der Kontakt kam schnell zu Stande, die Besichtigung war nett, und die Ausführung schnell und professionell. Gerne wieder!",
    name: "Adrian, Wolfratshausen",
    project: "Entsorgung",
    date: "Mai 2026",
  },
  {
    quote:
      "Schnelle und saubere Umsetzung, alles wie besprochen. Ich bin zufrieden.",
    name: "Haider Hassan, Kirchheim",
    project: "Entsorgung",
    date: "Mai 2026",
  },
  {
    quote:
      "Herr Mitat von Bauitec war pünktlich vor Ort und hat den Auftrag vollständig ausgeführt. Ich kann Bauitec weiterempfehlen.",
    name: "Bertrand, Herrsching",
    project: "Sondermüll",
    date: "Okt 2024",
  },
  {
    quote: "Sehr freundlich, Auftrag gemäß Absprache durchgeführt.",
    name: "Smely, Taufkirchen",
    project: "Montage",
    date: "Mai 2026",
  },
  {
    quote: "Schnell und zuverlässig!",
    name: "Kunde aus Garching",
    project: "Entrümpelung",
    date: "Nov 2024",
  },
];

export const serviceOptions = [
  "Sanierung",
  "Betonarbeiten",
  "Trockenbau",
  "Fliesenverlegung",
  "Bodenbeläge",
  "Gartenbau",
  "Abbruch",
  "Sonstiges",
];
