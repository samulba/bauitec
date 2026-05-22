"use client";

export const OPEN_COOKIE_SETTINGS = "open-cookie-settings";

export function CookieSettingsButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
