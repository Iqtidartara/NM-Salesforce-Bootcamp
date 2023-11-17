import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  // Extract data from request
  const { name, email, phoneNumber } = await request.json();

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: email, // sender address
    to: process.env.RECIPIENT_EMAIL, // your email to receive messages
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}`,
    // You can also use HTML content here
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
