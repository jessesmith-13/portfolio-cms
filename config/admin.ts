export default ({ env }) => ({
  url: env('STRAPI_ADMIN_URL', null), // IMPORTANT FOR HTTPS ON RENDER

  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'default-encryption-key'),
    sessionKey: env('SESSION_SECRET'), // Strapi v5 needs this too
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});