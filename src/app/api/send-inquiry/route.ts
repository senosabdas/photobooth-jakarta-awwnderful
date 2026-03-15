import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, date, details } = body

    // Step 1: Validate form fields
    if (!name || !email || !date || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Step 2: Validate environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          error: 'Email service not configured properly',
          details: 'Missing one or more SMTP environment variables',
        },
        { status: 500 }
      )
    }

    const port = parseInt(SMTP_PORT, 10) || 587

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // Use secure only for port 465
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Step 3: Verify transporter
    try {
      await transporter.verify()
      console.log('✅ SMTP verified')
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError)
      return NextResponse.json(
        {
          error: 'SMTP connection failed',
          details: 'Please verify your SMTP credentials',
        },
        { status: 500 }
      )
    }

    // Step 4: Prepare mail content
    const mailOptions = {
      from: SMTP_USER,
      to: 'hi@awwnderful.com',
      subject: `New Booking Inquiry from ${name}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${date}</p>
        <p><strong>Event Details:</strong></p>
        <p>${details.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from Awwnderful website contact form</small></p>
      `,
      replyTo: email,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent:', info.messageId)

    return NextResponse.json(
      {
        message: 'Inquiry sent successfully',
        messageId: info.messageId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error sending inquiry:', error)

    let errorMessage = 'Failed to send inquiry'
    if (error instanceof Error) {
      if (error.message.includes('auth')) errorMessage = 'Email authentication failed'
      else if (error.message.includes('connect')) errorMessage = 'Failed to connect to email server'
      else if (error.message.includes('timeout')) errorMessage = 'Email service timeout'
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined,
      },
      { status: 500 }
    )
  }
}
