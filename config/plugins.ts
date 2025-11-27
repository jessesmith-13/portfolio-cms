export default ({ env }) => ({
  email: {
    provider: 'nodemailer',
    settings: {
      host: env('EMAIL_HOST', 'smtp.sendgrid.net'),
      port: env.int('EMAIL_PORT', 587),
      secure: env.bool('EMAIL_SECURE', false),
      auth: {
        user: env('EMAIL_USER', 'apikey'), // SendGrid requires literal "apikey"
        pass: env('EMAIL_PASS'),
      },
    },
    defaults: {
      from: env('EMAIL_FROM', env('EMAIL_TO')), // fallback to your inbox
      replyTo: env('EMAIL_REPLY_TO', env('EMAIL_TO')),
    },
  },
});