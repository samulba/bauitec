export function Logo({
  className = "",
  size = "text-2xl",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 leading-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
        aria-hidden
      >
        <circle cx="100" cy="100" r="92" fill="#c83a30" />
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M40 160 L40 92 L72 70 L72 160 Z" />
          <path d="M72 160 L72 70 L108 42 L108 160 Z" />
          <path d="M108 160 L108 66 L162 52 L162 160 Z" />
          <path d="M38 162 L164 162" />
        </g>
      </svg>
      <span className="inline-flex flex-col">
        <span className={`font-sans font-semibold tracking-tight ${size}`}>
          bauitec
        </span>
        <span className="mt-1 h-[3px] w-7 bg-amber" aria-hidden />
      </span>
    </span>
  );
}
