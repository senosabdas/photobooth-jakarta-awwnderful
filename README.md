# Awwnderful Photo Booth Website

This is a [Next.js](https://nextjs.org) project for Awwnderful Photo Booth services.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Service

**Important:** The contact form requires email configuration to work properly.

Create a `.env.local` file in the project root:

```bash
# Gmail Configuration (Recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

> **Note:** For Gmail, use App Password instead of regular password. Enable 2FA first, then generate App Password.

See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed configuration options.

### 3. Test Email Configuration

```bash
npm run test-email
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 📸 Photo booth service showcase
- 🎨 Interactive service galleries  
- 📱 Mobile-responsive design
- 📧 Contact form with email notifications
- 📝 Blog with case studies
- ❓ FAQ section

## Email Setup

The contact form sends inquiries to `hi@awwnderful.com`. To change this:

1. Edit `src/app/api/send-inquiry/route.ts`
2. Update the `to` field in `mailOptions`

## Troubleshooting

### Contact Form Issues
- Shows success but no email: Missing `.env.local` file
- Shows error on VPS: Environment variables not set on server
- Authentication errors: Use App Password for Gmail

Run `npm run test-email` to diagnose email issues.

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Deployment

### Environment Variables Required:
- `SMTP_HOST`
- `SMTP_PORT`  
- `SMTP_USER`
- `SMTP_PASS`

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Add environment variables in Vercel dashboard before deploying.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
