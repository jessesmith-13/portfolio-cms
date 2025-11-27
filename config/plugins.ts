export default ({ env }) => ({
  email: {
    config: {
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
  },

  // OPTIONAL but recommended — enables image upload & security headers
  upload: {
    config: {
      breakpoints: {
        thumbnail: 150,
        small: 500,
        medium: 750,
        large: 1200,
      },
    },
  },

  // OPTIONAL — if you want Strapi to allow requests from your portfolio site
  // (Useful for "contact forms" if using frontend-only submissions later)
  cors: {
    enabled: true,
    config: {
      origin: [
        env('FRONTEND_URL', 'http://localhost:3000'),
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
      keepHeadersOnError: true,
    },
  },
});