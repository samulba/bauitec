import Image from "next/image";

export function Logo({
  className = "",
  size = "text-2xl",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 leading-none ${className}`}>
      <Image
        src="/logo.png"
        alt="bauitec"
        width={64}
        height={64}
        priority
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
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
