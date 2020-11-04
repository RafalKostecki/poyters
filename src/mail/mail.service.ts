import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';


@Injectable()
export class MailService {
  async send (from: string, to: string, subject: string, text: string): Promise<string> {
    const transporter = nodemailer.createTransport(smtpTransport({
      host: "mail49.mydevil.net",
      port: 465,
      secure: true,
      auth: {
        user: "no-reply@poyters.pl",
        pass: "pass"
      },
      connectionTimeout: 5000, // No effect
      greetingTimeout: 5000, // No effect
      socketTimeout: 5000 // No effect
    }));
  
    console.log('here 1')
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text
    });

    console.log(`Message ${info} sent`)

    return info?.messageId;
  }
}
