import config from "../config/env";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  auth: {
    user: config.smtp.username,
    pass: config.smtp.password,
  },
});

export default async function sendEmail(to, subject, message) {
  try {
    const info = await transporter.sendMail({
      from: `"Your Business Name" <${config.smtp.from}>`,
      to,
      subject,
      text: message,
    });
    console.log(info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}
