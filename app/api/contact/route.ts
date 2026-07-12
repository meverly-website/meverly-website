import { Resend } from "resend";

console.log("API KEY =", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    await resend.emails.send({
      from: "Meverly <onboarding@resend.dev>",
      to: "m.everlybooks@gmail.com",
      subject: `📩 ${subject}`,
      replyTo: email,

      html: `
        <h2>Nouveau message depuis le site</h2>

        <p><strong>Nom :</strong> ${name}</p>

        <p><strong>Email :</strong> ${email}</p>

        <hr>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {

    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );

  }
}