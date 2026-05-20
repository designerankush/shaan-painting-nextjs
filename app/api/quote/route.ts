import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, suburb, address, message } = body;

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

    await transporter.sendMail({
      from: `"Shaan Painting" <${process.env.QUOTE_FROM_EMAIL}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Free Quote Request from ${name}`,
      html: `
        <h2>New Free Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Suburb:</strong> ${suburb}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Shaan Painting" <${process.env.QUOTE_FROM_EMAIL}>`,
      to: email,
      subject: "We received your quote request",
      html: `
        <h2>Thank you for your quote request</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting Shaan Painting. We have received your request and our team will contact you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br />
        <p>Regards,<br />Shaan Painting</p>
      `,
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