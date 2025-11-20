// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), { status: 400 });
  }

  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // ✅ Shows sender name, uses your email
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    replyTo: email, // ✅ Lets you hit "Reply" and reach the client directly
    text: `
      Name: ${name}
      Email: ${email}
    
      Message:
      ${message}
    `,
  };


  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email send error:", err.message, err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
