
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

  async insertUser(username: string, password: string, mail: string) {
    const existingUsers = await this.userModel.find({username: username}).exec();
    
    if (existingUsers.length > 0) {
      throw new HttpException({
        status: 409,
        error: 'User already exists',
      }, 409);
    } else {
      await bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          throw new HttpException({
            status: 500,
            error: 'Error during crypting a password',
          }, 500);
        } else {
          const newUser = new this.userModel({
            username,
            password: hash,
            mail
          });
          
          newUser.save();

          const transporter = nodemailer.createTransport(smtpTransport({
            pool: true,
            host: "mail49.mydevil.net",
            port: 465,
            secure: true, // use TLS
            auth: {
              user: "no-reply@poyters.pl",
              pass: "aaa"
            }
          }));


          transporter.verify(function(error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }
          });

          const mailOptions = {
            from: '"Poyters Team" <no-reply@poyters.pl>',
            to: mail,
            subject: 'Create a new account',
            text: `Hey ${username}! U created ur a very new Poyters Account`
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
          });
        }
      });
    }
  }

  async findOne(username: string): Promise<IUser[] | undefined> {
    const existingUsers = await this.userModel.find({username: username}).exec();
    return existingUsers;
  }
}