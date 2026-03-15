# Email Setup Guide for Contact Form

Your contact form is not working because the SMTP environment variables are not configured. Here's how to fix it:

## 🔧 Required Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
# SMTP Configuration for Email Sending
SMTP_HOST=your-smtp-host
SMTP_PORT=your-smtp-port
SMTP_USER=your-email@domain.com
SMTP_PASS=your-email-password
```

## 📧 Email Service Options

### Option 1: Gmail (Recommended)
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
```

**Important:** For Gmail, you need to:
1. Enable 2-Factor Authentication
2. Generate an App Password (not your regular password)
3. Go to: Google Account → Security → App passwords
4. Generate password for "Mail"

### Option 2: Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Option 3: Custom Domain (cPanel/Hosting)
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=465
SMTP_USER=contact@yourdomain.com
SMTP_PASS=your-email-password
```

### Option 4: SendGrid (For Production)
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## 🚀 Quick Setup Steps

1. **Create Environment File:**
   ```bash
   # In your project root (awwnderful-photobooth/)
   touch .env.local
   ```

2. **Add Your SMTP Credentials:**
   Copy one of the configurations above into `.env.local`

3. **Restart Development Server:**
   ```bash
   npm run dev
   ```

4. **Test the Contact Form:**
   - Fill out the form on your website
   - Check console logs for any errors
   - Check your receiving email

## 🔍 Troubleshooting

### Local Development (Shows Success but No Email)
- **Issue:** Missing environment variables
- **Solution:** Create `.env.local` with proper SMTP settings

### Production VPS (Shows Error)
- **Issue:** Environment variables not set on server
- **Solution:** Add environment variables to your deployment

### Common SMTP Errors:
- **Auth Error:** Wrong username/password or need App Password
- **Connection Error:** Wrong host/port or firewall blocking
- **Security Error:** Need to enable "Less secure apps" or use App Password

## 🖥️ VPS Deployment Setup

### For PM2 (Node.js)
```bash
# Set environment variables
export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=465
export SMTP_USER=your-email@gmail.com
export SMTP_PASS=your-app-password

# Or create .env file on server
nano .env.local
```

### For Docker
```dockerfile
ENV SMTP_HOST=smtp.gmail.com
ENV SMTP_PORT=465
ENV SMTP_USER=your-email@gmail.com
ENV SMTP_PASS=your-app-password
```

### For Vercel/Netlify
Add environment variables in your hosting platform's dashboard.

## ✅ Testing Checklist

- [ ] Environment variables are set
- [ ] SMTP credentials are correct
- [ ] Port and host are correct
- [ ] App password is used (for Gmail)
- [ ] Server is restarted after adding env vars
- [ ] Console shows no errors
- [ ] Email is received

## 📝 Current Email Destination

Emails are currently sent to: **hi@awwnderful.com**

To change this, edit line 67 in:
`src/app/api/send-inquiry/route.ts`

## 🆘 Still Having Issues?

1. Check browser console for errors
2. Check server logs for SMTP errors
3. Verify email credentials by testing with email client
4. Try different SMTP provider
5. Check if port 465/587 is blocked by firewall

## 🔒 Security Notes

- Never commit `.env.local` to git (it's in .gitignore)
- Use App Passwords instead of regular passwords
- Consider using dedicated email service for production
- Regularly rotate email passwords 