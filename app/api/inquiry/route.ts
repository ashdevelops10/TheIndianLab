import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const data = schema.parse(await req.json());
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL ?? "hello@theindianlab.com",
          to: process.env.RESEND_TO_EMAIL ?? "hello@theindianlab.com",
          reply_to: data.email,
          subject: `Inquiry — ${data.name}`,
          text: `${data.name} <${data.email}>\n\n${data.message}`,
        }),
      });
      if (!r.ok) throw new Error("email failed");
    } else {
      console.info("[inquiry] received:", data);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 400 });
  }
}
