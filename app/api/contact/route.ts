import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || !data.name || !data.email || !data.beschreibung) {
    return NextResponse.json(
      { ok: false, error: "Pflichtfelder fehlen." },
      { status: 400 },
    );
  }

  // TODO: Versand anbinden (z. B. Resend, Nodemailer/SMTP oder ein
  // Form-Backend). Aktuell wird die Anfrage nur serverseitig geloggt.
  console.log("Neue Kontaktanfrage:", {
    name: data.name,
    email: data.email,
    telefon: data.telefon ?? "",
    bauvorhaben: data.bauvorhaben ?? "",
    beschreibung: data.beschreibung,
  });

  return NextResponse.json({ ok: true });
}
