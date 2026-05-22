const items = [
  "Sanierung",
  "Betonarbeiten",
  "Trockenbau",
  "Fliesenverlegung",
  "Bodenbeläge",
  "Gartenbau",
  "Abbruch",
  "Eigene Geräte",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden border-y border-line-dark bg-ink py-5 text-paper">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 text-2xl font-medium tracking-tight sm:text-3xl">
              {item}
            </span>
            <span className="text-2xl text-amber sm:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
