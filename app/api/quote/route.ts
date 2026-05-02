import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = Object.fromEntries(form.entries());

    if (!process.env.RESEND_API_KEY) {
      return Response.redirect(new URL('/?sent=false&error=missing_key', req.url));
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'SM Electrical <onboarding@resend.dev>',
      to: ['kayne@builtforperth.com.au'],
      subject: `New quote request from ${String(data.name ?? 'Website visitor')}`,
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`
    });

    return Response.redirect(new URL('/?sent=true', req.url));
  } catch {
    return Response.redirect(new URL('/?sent=false&error=send_failed', req.url));
  }
}
