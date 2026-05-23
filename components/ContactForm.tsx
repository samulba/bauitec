"use client";

import { useState } from "react";
import { site, serviceOptions } from "@/lib/content";

// Kostenloser, serverloser Formularversand über Web3Forms (unbegrenzte
// Einsendungen, gratis). Solange der Key leer ist, öffnet das Formular
// ersatzweise das E-Mail-Programm.
const WEB3FORMS_ACCESS_KEY = "675be533-f77d-47cf-9817-c730a80f9273";

const inputClass =
  "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition-shadow placeholder:text-stone/50 focus:border-amber focus:ring-4 focus:ring-amber/15";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    if (!WEB3FORMS_ACCESS_KEY) {
      const body = [
        `Name: ${data.name ?? ""}`,
        `Telefon: ${data.telefon ?? ""}`,
        `E-Mail: ${data.email ?? ""}`,
        `Bauvorhaben: ${data.bauvorhaben ?? ""}`,
        "",
        data.beschreibung ?? "",
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Anfrage über die Website",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("done");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Neue Anfrage über bauitec.com",
          from_name: data.name,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-soft p-7 md:p-9">
      {status === "done" ? (
        <div className="flex min-h-80 flex-col items-center justify-center py-6 text-center">
          <div className="relative h-16 w-16">
            <span
              className="success-ring absolute inset-0 rounded-full bg-amber/40"
              aria-hidden
            />
            <span className="success-circle absolute inset-0 flex items-center justify-center rounded-full bg-amber">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#14110e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path className="success-check" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <p className="success-text mt-7 text-2xl font-semibold tracking-tight">
            Danke — Anfrage ist raus.
          </p>
          <p className="success-text mt-2 max-w-xs text-ink/70">
            Wir melden uns innerhalb von 24 Stunden bei dir zurück.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="success-text mt-7 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
          >
            Weitere Anfrage senden
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <Field label="Name" name="name" required placeholder="Max Mustermann" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Telefon" name="telefon" type="tel" placeholder="0151 …" />
            <Field
              label="E-Mail"
              name="email"
              type="email"
              required
              placeholder="max@email.de"
            />
          </div>

          <div>
            <label className="eyebrow text-stone" htmlFor="bauvorhaben">
              Bauvorhaben
            </label>
            <select
              id="bauvorhaben"
              name="bauvorhaben"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="eyebrow text-stone" htmlFor="beschreibung">
              Kurz beschreiben *
            </label>
            <textarea
              id="beschreibung"
              name="beschreibung"
              required
              rows={4}
              placeholder="Was möchtest du bauen oder sanieren? Wo? Wann?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-ink/70">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-amber"
            />
            <span>
              Ich bin damit einverstanden, dass meine Daten zum Zwecke der
              Kontaktaufnahme verarbeitet werden.
            </span>
          </label>

          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              Da ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib
              direkt an{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Spinner />
                Wird gesendet …
              </>
            ) : (
              "Anfrage senden →"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-stone" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
