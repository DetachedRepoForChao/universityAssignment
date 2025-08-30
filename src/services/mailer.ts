import nodemailer, { Transporter } from "nodemailer";

export function createTransport(): Transporter | nodemailer.Transporter<any> {
  if (process.env.SMTP_URL) {
    return nodemailer.createTransport(process.env.SMTP_URL);
  }
  // Fallback: Ethereal (dev) or JSON transport
  return nodemailer.createTransport({ jsonTransport: true });
}

export async function sendMail(opts: { to: string; subject: string; text?: string; html?: string }) {
  const t = createTransport();
  return (t as any).sendMail({ from: process.env.MAIL_FROM || "wangchao9524@gmail.com", ...opts });
}


