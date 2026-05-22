type IconProps = { className?: string };

const base = "h-7 w-7";

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  const Icon = icons[name] ?? icons.renovation;
  return <Icon className={`${base} ${className}`} />;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, (p: IconProps) => React.ReactElement> = {
  renovation: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  concrete: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="13" width="18" height="7" rx="1" />
      <path d="M3 16h18M7 13v7M12 13v7M17 13v7" />
      <path d="M6 9l6-4 6 4" />
    </svg>
  ),
  drywall: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6" />
    </svg>
  ),
  tiles: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  floor: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M3 6h18M3 12h18M3 18h18" />
      <path d="M8 6v6M16 6v6M5 12v6M12 12v6M19 12v6" />
    </svg>
  ),
  garden: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3 2-5 5-5 0 3-2 5-5 5z" />
      <path d="M12 11c0-3-2-5-5-5 0 3 2 5 5 5z" />
      <path d="M4 21h16" />
    </svg>
  ),
  demolition: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="7" cy="17" r="3" />
      <path d="M9.5 15L20 5" />
      <path d="M16 4h5v5" />
      <path d="M3 21h18" />
    </svg>
  ),
  machinery: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M3 18h11v-4H6l-3 4z" />
      <circle cx="6" cy="20" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <path d="M14 14V8h3l4 5" />
      <path d="M17 8V5" />
    </svg>
  ),
};
