import {
  FEEDBACK_FORM_SMTP_USER,
  FEEDBACK_FORM_SMTP_PASSWORD,
  FEEDBACK_SMTP_HOST,
  FEEDBACK_SMTP_PORT,
} from "general-config";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";

const transporter: Transporter = nodemailer.createTransport({
  port: Number(FEEDBACK_SMTP_PORT),
  host: FEEDBACK_SMTP_HOST,
  auth: {
    user: FEEDBACK_FORM_SMTP_USER,
    pass: FEEDBACK_FORM_SMTP_PASSWORD,
  },
  secure: false,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { formValues } = await JSON.parse(req.body);

    try {
      const emailContent = `
    <strong>Name:</strong> ${formValues?.username || ""}<br />
    <strong>Email:</strong> ${formValues?.email || ""}<br />
    <strong>Phone:</strong> ${formValues?.phoneNumber || ""}<br />
    <strong>Message:</strong> ${formValues?.message || ""}`;

      const resp = await transporter.sendMail({
        from: FEEDBACK_FORM_SMTP_USER,
        sender: formValues?.email,
        to: FEEDBACK_FORM_SMTP_USER,
        html: emailContent,
        subject: formValues?.subject,
      });

      return res.status(200).json({ message: true });
    } catch (error) {
      console.error(`Failed: ${error}`);
      return res.status(400).json({
        message: false,
      });
    }
  }
}
