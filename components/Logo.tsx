export function Logo({
  className = "",
  size = "text-2xl",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 leading-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="bauitec"
        width={72}
        height={72}
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      />
      <span className="inline-flex flex-col">
        <span className={`font-sans font-semibold tracking-tight ${size}`}>
          bauitec
        </span>
        <span className="mt-1 h-[3px] w-7 bg-amber" aria-hidden />
      </span>
    </span>
  );
}
