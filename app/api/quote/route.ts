import { Resend } from 'resend';

export async function POST(req: Request) {
  const form = await req.formData();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = Object.fromEntries(form.entries());
  await resend.emails.send({
    from: 'SM Electrical <onboarding@resend.dev>',
    to: ['kayne@builtforperth.com.au'],
    subject: `New quote request from ${data.name}`,
    html: `<pre>${JSON.stringify(data, null, 2)}</pre>`
  });
  return Response.redirect(new URL('/?sent=true', req.url));
}
