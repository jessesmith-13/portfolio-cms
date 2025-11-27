import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  async send(ctx) {
    try {
      const { name, email, message } = ctx.request.body;

      if (!name || !email || !message) {
        return ctx.badRequest('Missing required fields.');
      }

      // v5 email service
      await strapi.service('plugin::email.email').send({
        to: process.env.CONTACT_TO_EMAIL,      // e.g. jesselsmith713@gmail.com
               // OR hardcode for now
        // to: "jesselsmith713@gmail.com",
        from: process.env.EMAIL_FROM,          // must match SendGrid verified sender
        replyTo: email,
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p>${message}</p>`,
      });

      return { success: true };
    } catch (err) {
      console.error('SEND EMAIL ERROR', err);
      return ctx.internalServerError('Email failed to send.');
    }
  },
}));