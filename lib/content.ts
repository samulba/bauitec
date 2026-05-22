export const site = {
  name: "bauitec",
  tagline: "Wir bauen, was bleibt.",
  email: "info@bauitec.com",
  phone: "+49 · auf Anfrage",
  location: "Poing bei München",
  region: "Großraum München · 60 km Radius",
};

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Projekte", href: "#projekte" },
  { label: "Kontakt", href: "#kontakt" },
];

export type Service = {
  num: string;
  label: string;
  title: string;
  text: string;
  icon: string;
};

export const services: Service[] = [
  {
    num: "01",
    label: "Sanierung",
    title: "Sanierung",
    text: "Komplettsanierung von Wohn- und Geschäftsräumen. Abriss, Estrich, Trockenbau, Boden, Fliesen — in einem Zug.",
    icon: "renovation",
  },
  {
    num: "02",
    label: "Betonarbeiten",
    title: "Betonarbeiten",
    text: "Fundamente, Bodenplatten, Stützmauern. Eigene Schalungen, eigene Geräte — auch für komplexe Geometrien.",
    icon: "concrete",
  },
  {
    num: "03",
    label: "Trockenbau",
    title: "Trockenbau",
    text: "Wände, Decken, abgehängte Konstruktionen. Brandschutz und Schallschutz nach DIN — sauber verspachtelt.",
    icon: "drywall",
  },
  {
    num: "04",
    label: "Fliesenverlegung",
    title: "Fliesenverlegung",
    text: "Bad, Küche, Außenbereich. Großformat, Mosaik, XXL-Platten — präzise verfugt, sauber abgesetzt.",
    icon: "tiles",
  },
  {
    num: "05",
    label: "Bodenbeläge",
    title: "Bodenbeläge",
    text: "Parkett, Vinyl, Laminat, Estrich. Vom Untergrund bis zur fertigen Oberfläche — alle Beläge, alle Räume.",
    icon: "floor",
  },
  {
    num: "06",
    label: "Gartenbau",
    title: "Gartenbau",
    text: "Pflasterung, Hochbeete, Zäune, Terrassen. Außenanlagen mit Charakter — solide gebaut, sauber abgesetzt.",
    icon: "garden",
  },
  {
    num: "07",
    label: "Abbruch",
    title: "Abbruch",
    text: "Selektiver Rückbau und Komplettabbruch. Eigene Bagger, eigene Container — Entsorgung inklusive.",
    icon: "demolition",
  },
  {
    num: "08",
    label: "Eigene Geräte",
    title: "Eigene Geräte",
    text: "Gerüst, Zaun, Schalungen, Bagger — alles im eigenen Bestand. Keine Mietgeräte, keine Wartezeiten.",
    icon: "machinery",
  },
];

export const stats = [
  { value: "93", suffix: "+", label: "Bauvorhaben", text: "Abgeschlossene Projekte im Großraum München" },
  { value: "98", suffix: "%", label: "Zufriedenheit", text: "Kundinnen und Kunden würden uns weiterempfehlen" },
  { value: "7", suffix: "", label: "Gewerke", text: "Vom Aushub bis zur Übergabe in einer Hand" },
  { value: "0", suffix: "€", label: "Subunternehmer", text: "Eigenes Team, eigene Geräte, klare Verantwortung" },
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

export const projects = [
  {
    tag: "Sanierung · Bad",
    title: "Komplettsanierung Bad mit Großformat-Fliesen",
    text: "Abriss, Estrich neu, XXL-Fliesen, neue Sanitärobjekte. Aus einem 90er-Bad wurde ein modernes Spa in 14 Tagen.",
    year: "2025",
    duration: "14 Tage",
  },
  {
    tag: "Garten · Außenanlage",
    title: "Neue Außenanlage mit Pflasterung & Hochbeet",
    text: "180 m² Pflaster, drei Hochbeete, neuer Sichtschutzzaun. Eigene Bagger, drei Wochen, ein Ansprechpartner.",
    year: "2025",
    duration: "3 Wochen",
  },
  {
    tag: "Trockenbau · Büro",
    title: "Bürotrockenbau mit Brandschutz F30",
    text: "240 m² Trennwände, abgehängte Decken, Akustikplatten. F30-Brandschutz nach DIN — sauber verspachtelt, übergeben.",
    year: "2024",
    duration: "5 Wochen",
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
