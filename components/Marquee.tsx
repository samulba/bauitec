const items = [
  "Sanierung",
  "Betonarbeiten",
  "Trockenbau",
  "Fliesenverlegung",
  "Bodenbeläge",
  "Gartenbau",
  "Abbruch",
  "Eigene Geräte",
  "Festpreis",
  "Ein Ansprechpartner",
  "VOB-Gewährleistung",
  "Region München",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="marquee group relative overflow-hidden border-y border-line bg-soft py-3"
      aria-hidden
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-soft to-transparent" />

      <div
        className="marquee-track flex items-center"
        style={{ animationDuration: "90s" }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/70">
              {item}
            </span>
            <span aria-hidden className="text-amber">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
