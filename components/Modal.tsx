"use client";

import { useEffect } from "react";

export function Modal({
  open,
  onClose,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  label?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
    >
      <div
        className="backdrop-in absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="panel-in relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-t-3xl border border-line bg-paper p-7 shadow-2xl sm:m-6 sm:max-w-lg sm:rounded-3xl sm:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
