export function Logo({
  className = "",
  size = "text-2xl",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-sans font-semibold tracking-tight ${size}`}>
        bauitec
      </span>
      <span className="mt-1 h-[3px] w-7 bg-amber" aria-hidden />
    </span>
  );
}
