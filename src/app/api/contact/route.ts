// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail app password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // sender email
      to: "omjjamnekar@gmail.com", // recipient email
      subject: "New Hiring Request",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Company: ${data.company || "-"}
        Position: ${data.position || "-"}
        Budget: ${data.budget || "-"}
        Timeline: ${data.timeline || "-"}
        Message: ${data.message}
      `,
      replyTo: data.email, // replies go to user who filled the form
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
