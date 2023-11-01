import { Injectable } from "@nestjs/common";
import { createTransport } from "nodemailer";

export interface Email{
  email_to: string
  subject: string
  body: string
  id?: number
}

@Injectable()
export class SendEmailService{
  sendEmail(email:Email, emailSendFail:(email:Email)=>void, emailSendSuccess:(email: Email)=>void){
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      secure: true,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email.email_to,
      subject: email.subject,
      html: email.body,
    };
  
    transporter.sendMail(mailOptions, async (error) => {
      if (error) {
        emailSendFail(email);
      } else {
        emailSendSuccess(email);
      }
    });
  }

}