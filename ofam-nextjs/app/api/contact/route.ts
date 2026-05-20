import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactPayload {
  name:     string;
  company:  string;
  email:    string;
  phone?:   string;
  service?: string;
  size?:    string;
  message:  string;
}

// ─── Validation helper ────────────────────────────────────────────────────────
function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name?.trim())    return "Name is required.";
  if (!body.email?.trim())   return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return "Please enter a valid email address.";
  if (!body.message?.trim()) return "Message is required.";
  return null;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate
  const error = validate(body);
  if (error) {
    return NextResponse.json({ error }, { status: 422 });
  }

  const payload: ContactPayload = {
    name:    body.name!.trim(),
    company: body.company?.trim() ?? "",
    email:   body.email!.trim().toLowerCase(),
    phone:   body.phone?.trim(),
    service: body.service?.trim(),
    size:    body.size?.trim(),
    message: body.message!.trim(),
  };

  // ─────────────────────────────────────────────────────────────────────────
  // SEND EMAIL — wire up your preferred service here.
  //
  // Option A — Resend (recommended for Next.js / Vercel):
  //   npm install resend
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from:    "no-reply@ofam.io",
  //     to:      process.env.CONTACT_TO_EMAIL!,
  //     subject: `New quote request from ${payload.name}`,
  //     text:    JSON.stringify(payload, null, 2),
  //   });
  //
  // Option B — Nodemailer (SMTP):
  //   npm install nodemailer @types/nodemailer
  //   const transporter = nodemailer.createTransport({ ... });
  //   await transporter.sendMail({ ... });
  //
  // Option C — Store in a database (Vercel Postgres / Supabase / PlanetScale):
  //   await db.insert(contactRequests).values(payload);
  //
  // For now we log to the server console so you can verify submissions locally.
  // ─────────────────────────────────────────────────────────────────────────
  console.info("[OFAM Contact] New quote request:", payload);

  return NextResponse.json(
    { message: "Quote request received. We will be in touch within 4 business hours." },
    { status: 200 }
  );
}
