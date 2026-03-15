// Email Configuration Test Script
// Run this with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmailConfig() {
  console.log('🧪 Testing Email Configuration...\n');

  // Check environment variables
  const envVars = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS ? '***' : undefined
  };

  console.log('📋 Environment Variables:');
  Object.entries(envVars).forEach(([key, value]) => {
    console.log(`   ${key}: ${value || '❌ MISSING'}`);
  });

  const missingVars = Object.entries(envVars).filter(([_, value]) => !value).map(([key, _]) => key);
  
  if (missingVars.length > 0) {
    console.log('\n❌ Missing environment variables:', missingVars.join(', '));
    console.log('   Please create .env.local file with SMTP configuration');
    return;
  }

  console.log('\n✅ All environment variables present');

  try {
    // Create transporter
    console.log('\n🔧 Creating SMTP transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    console.log('🔌 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    // Send test email
    console.log('\n📧 Sending test email...');
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'hi@awwnderful.com',
      subject: 'Test Email - Awwnderful Contact Form',
      html: `
        <h2>🧪 Test Email</h2>
        <p>This is a test email to verify the SMTP configuration.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
        <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
        <hr>
        <p><small>If you received this email, your contact form should work properly!</small></p>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${info.messageId}`);
    console.log('   Check hi@awwnderful.com for the test email');

  } catch (error) {
    console.log('\n❌ Email test failed:');
    console.log(`   Error: ${error.message}`);
    
    if (error.message.includes('auth')) {
      console.log('\n💡 Authentication Issue:');
      console.log('   - Check username and password');
      console.log('   - For Gmail: Use App Password, not regular password');
      console.log('   - Enable 2FA first, then generate App Password');
    } else if (error.message.includes('connect')) {
      console.log('\n💡 Connection Issue:');
      console.log('   - Check SMTP host and port');
      console.log('   - Verify firewall is not blocking the port');
      console.log('   - Try different port (465 for SSL, 587 for TLS)');
    }
  }
}

// Run the test
testEmailConfig().catch(console.error); 