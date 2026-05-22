"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { site, serviceOptions } from "@/lib/content";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow text-stone">05 — Kontakt</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Lass uns über dein{" "}
                <span className="underline-amber">Bauvorhaben</span> reden.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                Schreib uns kurz, was du planst — oder ruf an. Erstgespräch &
                Aufmaß sind kostenlos und unverbindlich. Wir melden uns
                innerhalb von 24 Stunden zurück.
              </p>

              <dl className="mt-10 space-y-5 border-t border-line pt-8">
                {[
                  { label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
                  { label: "Telefon", value: site.phone },
                  { label: "Sitz", value: site.location },
                  { label: "Einsatzgebiet", value: site.region },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline gap-6">
                    <dt className="eyebrow w-28 shrink-0 text-stone">
                      {row.label}
                    </dt>
                    <dd className="text-base text-ink">
                      {row.href ? (
                        <a className="hover:text-amber" href={row.href}>
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-soft p-7 md:p-9">
              {status === "done" ? (
                <div className="flex h-full min-h-72 flex-col items-start justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber text-ink">
                    ✓
                  </span>
                  <p className="mt-5 text-xl font-semibold tracking-tight">
                    Danke — Anfrage ist raus.
                  </p>
                  <p className="mt-2 text-ink/70">
                    Wir melden uns innerhalb von 24 Stunden zurück.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-stone underline-offset-4 hover:underline"
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Name" name="name" required />
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Telefon" name="telefon" type="tel" />
                    <Field label="E-Mail" name="email" type="email" required />
                  </div>

                  <div>
                    <label className="eyebrow text-stone" htmlFor="bauvorhaben">
                      Bauvorhaben
                    </label>
                    <select
                      id="bauvorhaben"
                      name="bauvorhaben"
                      className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink outline-none focus:border-amber"
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
                    <label
                      className="eyebrow text-stone"
                      htmlFor="beschreibung"
                    >
                      Kurz beschreiben *
                    </label>
                    <textarea
                      id="beschreibung"
                      name="beschreibung"
                      required
                      rows={4}
                      placeholder="Was möchtest du bauen oder sanieren? Wo? Wann?"
                      className="mt-2 w-full resize-none rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink outline-none placeholder:text-stone/60 focus:border-amber"
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
                      Ich bin damit einverstanden, dass meine Daten zum Zwecke
                      der Kontaktaufnahme verarbeitet werden.
                    </span>
                  </label>

                  {status === "error" && (
                    <p className="text-sm text-red-700">
                      Da ist etwas schiefgelaufen. Bitte versuch es erneut oder
                      schreib direkt an {site.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full justify-center rounded-full bg-amber px-6 py-3.5 text-base font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === "sending" ? "Wird gesendet …" : "Anfrage senden →"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink outline-none placeholder:text-stone/60 focus:border-amber"
      />
    </div>
  );
}
