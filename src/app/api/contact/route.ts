import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

// Input validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input data
    const { name, email, message } = contactFormSchema.parse(body);

    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["iyabivuzed@gmail.com"],
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0070f3;">${message}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eaeaea;" />
          <p style="color: #666; font-size: 14px;">Reply to: ${email}</p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form handler:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Optionally handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}
