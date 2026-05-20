import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminHtml = `
      <h2>New Free Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service || "Not selected"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const userHtml = `
      <h2>Thank you for your quote request</h2>
      <p>Hi ${name},</p>
      <p>Thank you for contacting us. We have received your request and our team will get back to you soon.</p>
      <p><strong>Your submitted details:</strong></p>
      <p><strong>Service:</strong> ${service || "Not selected"}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br />
      <p>Regards,<br />Your Team</p>
    `;

    await transporter.sendMail({
      from: `"Website Quote Request" <${process.env.QUOTE_FROM_EMAIL}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: `"Your Business Name" <${process.env.QUOTE_FROM_EMAIL}>`,
      to: email,
      subject: "We received your quote request",
      html: userHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully.",
    });
  } catch (error) {
    console.error("Quote form error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}