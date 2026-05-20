import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, suburb, address, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and phone are required.',
        },
        { status: 400 }
      );
    }

    const requiredEnv = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      QUOTE_RECEIVER_EMAIL: process.env.QUOTE_RECEIVER_EMAIL,
      QUOTE_FROM_EMAIL: process.env.QUOTE_FROM_EMAIL,
    };

    const missingEnv = Object.entries(requiredEnv)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingEnv.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing environment variables: ${missingEnv.join(', ')}`,
        },
        { status: 500 }
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
      <p><strong>Suburb:</strong> ${suburb || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service || 'Not selected'}</p>
      <p><strong>Address:</strong> ${address || 'Not provided'}</p>
      <p><strong>Project Details:</strong></p>
      <p>${message || 'Not provided'}</p>
    `;

    const userHtml = `
      <h2>Thank you for your quote request</h2>
      <p>Hi ${name},</p>
      <p>Thank you for contacting Shaan Painting. We have received your request and our team will contact you soon.</p>
      <p><strong>Your submitted details:</strong></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service || 'Not selected'}</p>
      <p><strong>Suburb:</strong> ${suburb || 'Not provided'}</p>
      <p><strong>Address:</strong> ${address || 'Not provided'}</p>
      <p><strong>Project Details:</strong> ${message || 'Not provided'}</p>
      <br />
      <p>Regards,<br />Shaan Painting</p>
    `;

    await transporter.sendMail({
      from: `"Shaan Painting" <${process.env.QUOTE_FROM_EMAIL}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Free Quote Request from ${name}`,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: `"Shaan Painting" <${process.env.QUOTE_FROM_EMAIL}>`,
      to: email,
      subject: 'We received your quote request',
      html: userHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully.',
    });
  } catch (error) {
    console.error('Quote form error:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}