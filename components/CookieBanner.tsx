"use client";

import { useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS } from "./CookieSettingsButton";

const STORAGE_KEY = "bauitec-cookie-consent";

type Consent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  ts: number;
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }

    const reopen = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const c = JSON.parse(raw);
          setStatistics(!!c.statistics);
          setMarketing(!!c.marketing);
        }
      } catch {
        /* ignore */
      }
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  const save = (consent: Omit<Consent, "necessary" | "ts">) => {
    const data: Consent = { necessary: true, ts: Date.now(), ...consent };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* ignore */
    }
    // Hier könnten je nach Einwilligung Analytics-/Marketing-Skripte
    // geladen werden (aktuell setzt die Seite keine solchen Cookies).
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-line-dark bg-ink p-6 text-paper shadow-2xl sm:p-8">
        <p className="eyebrow text-amber">Datenschutz</p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight">
          Wir respektieren deine Privatsphäre
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-paper/70">
          Wir verwenden Cookies, um diese Website bereitzustellen und — mit
          deiner Einwilligung — die Nutzung zu analysieren. Notwendige Cookies
          sind für den Betrieb erforderlich. Mehr dazu in unserer{" "}
          <a href="/datenschutz" className="text-amber underline underline-offset-4">
            Datenschutzerklärung
          </a>
          . Deine Einwilligung kannst du jederzeit widerrufen.
        </p>

        {showSettings && (
          <div className="mt-5 space-y-3 border-t border-line-dark pt-5">
            <Row
              title="Notwendig"
              desc="Für den Betrieb der Website erforderlich. Immer aktiv."
              checked
              disabled
            />
            <Row
              title="Statistik"
              desc="Hilft uns zu verstehen, wie die Website genutzt wird."
              checked={statistics}
              onChange={setStatistics}
            />
            <Row
              title="Marketing"
              desc="Wird genutzt, um Inhalte und Angebote relevanter zu machen."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => save({ statistics: true, marketing: true })}
            className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => save({ statistics: false, marketing: false })}
            className="rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60"
          >
            Nur notwendige
          </button>
          {showSettings ? (
            <button
              type="button"
              onClick={() => save({ statistics, marketing })}
              className="rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="text-sm text-paper/60 underline-offset-4 hover:text-paper hover:underline sm:ml-auto"
            >
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({
  title,
  desc,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-amber disabled:opacity-60"
      />
      <span>
        <span className="block text-sm font-medium">{title}</span>
        <span className="block text-xs text-paper/60">{desc}</span>
      </span>
    </label>
  );
}
