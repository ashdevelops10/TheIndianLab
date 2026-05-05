import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  date: z.string(),
  time: z.string(),
  party: z.union([z.number(), z.string()]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Send via Resend if configured; otherwise log (dev)
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL ?? "reservations@theindianlab.com",
          to: process.env.RESEND_TO_EMAIL ?? "hello@theindianlab.com",
          reply_to: data.email,
          subject: `Reservation — ${data.name} · ${data.date} ${data.time}`,
          text: `New reservation request

Name:  ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Party: ${data.party}
Date:  ${data.date}
Time:  ${data.time}
Notes: ${data.notes ?? "—"}
`,
        }),
      });
      if (!r.ok) throw new Error("email send failed");
    } else {
      console.info("[reserve] received (no email provider configured):", data);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 400 });
  }
}
