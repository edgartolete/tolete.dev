import { CreateEmailOptions, Resend } from "resend";

export type ResendPayload = {
  email: string;
  firstName: string;
  lastName?: string;
  message: string;
};

export async function POST(req: Request) {
  const data = await req.json();

  const { email, firstName, lastName, message } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const providerEmail = process.env.PROVIDER_EMAIL;

  const recipientEmail = process.env.RECIPIENT_EMAIL || [];

  const payload: CreateEmailOptions = {
    from: `Tolete Web Development Services<${providerEmail}>`,
    to: recipientEmail,
    subject: "New message from your website",
    html: `<p>email: ${email}</p>
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Message: ${message}</p>`,
  };

  const res = await resend.emails.send(payload);

  return Response.json(res);
}
