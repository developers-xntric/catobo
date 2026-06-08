import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail({
  name,
  email,
  inquiryType,
  message,
}: {
  name: string;
  email: string;
  inquiryType?: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Inquiry - ${inquiryType || 'General'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });
}

export async function sendNewsletterEmail({ email }: { email: string }) {
  await transporter.sendMail({
    from: `"Newsletter" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: 'New Newsletter Subscription',
    html: `<p><strong>New newsletter subscription:</strong> ${email}</p>`,
  });
}
