import Link from "next/link";
import { Logo } from "./Logo";

export function LegalHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="bauitec — Startseite">
          <Logo size="text-xl" />
        </Link>
        <Link
          href="/"
          className="text-sm text-ink/70 transition-colors hover:text-ink"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </header>
  );
}
