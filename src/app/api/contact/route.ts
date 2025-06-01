import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'whalecore.innovation@gmail.com'; // Fallback, but should be in .env
const FROM_EMAIL = process.env.NEXT_PUBLIC_EMAIL_FROM || 'onboarding@resend.dev'; // Default or your verified domain email

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Construct email data
    const emailData = {
      from: `Contact Form <${FROM_EMAIL}>`, // Sender name and email (must be from a verified Resend domain or onboarding@resend.dev for testing)
      to: [TO_EMAIL],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr />
          <p>This email was sent from your website's contact form.</p>
        </div>
      `,
      reply_to: email, // Set the sender's email as the reply-to address
    };

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Error sending email', details: error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (err) {
    console.error('API Error:', err);
    // Type assertion for error object if needed
    const errorMessage = (err instanceof Error) ? err.message : 'An unexpected error occurred';
    return NextResponse.json({ error: 'Failed to process request', details: errorMessage }, { status: 500 });
  }
} 