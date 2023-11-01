import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { UpdateUserActivityDto } from '../user_activity/dto/update-user_activity.dto';
import { ActivityType } from '../user_activity/entities/user_activity.entity';
import { UserActivityRepository } from '../user_activity/user_activity.repository';
import { JwtService } from '@nestjs/jwt';
import { Email, SendEmailService } from 'src/utils/send-email.service';
import { CreateUserDto, UserRegisterDto } from '../users/dto/create-user.dto';
import { getEncrypted } from 'src/utils/Encryption';
import { ForgetPasswordDto } from '../users/dto/forget-password.dto';
import { ForgetPasswordChangeDto } from '../users/dto/forget-password-change.dto';
import { formatPermission } from 'src/utils/format-permissions';
import { UsersRepository } from '../users/users.repository';
import { PLACEHOLDER_LOGO_NAME } from 'src/utils/constants';

@Injectable()
export class AuthRepository {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
    private userActivityRepository: UserActivityRepository,
    private readonly sendEmailService: SendEmailService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log("asdhfasdf")
    const user = await this.usersRepository.findUser({ email: email }, true);
    console.log("user: ", user)
    if (user && user.password && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // async login(user: UserLoginDto) {
  //   const payload = { user };
  //   const activityData: UpdateUserActivityDto = {
  //     type: ActivityType.LOGIN,
  //     timestamp: new Date(),
  //     metadata: { description: 'Login as user' },
  //   };
  //   this.userActivityRepository.update(user.id, activityData);
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  // async invite(data: UserRegisterDto) {
  //   const checkUserExist = await this.usersRepository.findUser(
  //     { email: data.email },
  //     true,
  //   );
  //   if (checkUserExist) {
  //     throw new HttpException('Email already exist.', HttpStatus.CONFLICT);
  //   }
  //   const id = getEncrypted(
  //     `first_name=${data.first_name}&last_name=${data.last_name}&email=${data.email}`,
  //   );
  //   const url = `${process.env.CORS_ORIGIN}/basicInfo?id=${id}`;
  //   const email: Email = {
  //     email_to: data.email,
  //     subject: 'Register continue in testimonial app',
  //     // Please click <a href=${url}><strong>here</strong></a> to continue  the signup process or go to link: ${url} in your browser
  //     body: `
  //     <!DOCTYPE html>
  //     <html lang="en-US">
  //       <head>
  //         <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  //         <title>Set Password Email Template</title>
  //         <meta name="description" content="Set Password Email Template." />
  //         <style type="text/css">
  //           a:hover {
  //             text-decoration: underline !important;
  //           }
  //         </style>
  //       </head>

  //       <body>
  //         <table
  //               cellspacing="0"
  //               border="0"
  //               cellpadding="0"
  //               width="100%"
  //               >
  //           <tr>
  //             <td>
  //               <table
  //                     width="100%"
  //                     border="0"
  //                     align="center"
  //                     cellpadding="0"
  //                     cellspacing="0"
  //                     >
  //                 <tr>
  //                   <td style="height: 80px">&nbsp;</td>
  //                 </tr>
  //                 <tr>
  //                   <td style="height: 20px">&nbsp;</td>
  //                 </tr>
  //                 <tr>
  //                   <td>
  //                     <table
  //                           width="95%"
  //                           border="0"
  //                           align="center"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           style="
  //                                   max-width: 670px;
  //                                   background: #fff;
  //                                   border-radius: 3px;
  //                                   text-align: center;
  //                                   -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
  //                                   -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
  //                                   box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
  //                                   "
  //                           >
  //                       <tr>
  //                         <td style="height: 40px">&nbsp;</td>
  //                       </tr>
  //                       <tr>
  //                         <td style="padding: 0 35px">
  //                           <div style="margin-bottom: 50px">
  //                             <a href="testimonial.wolfmatrix.dev">
  //                               <img
  //                                   width="200"
  //                                   src="https://testimonial.wolfmatrix.dev/logo_dark.png"
  //                                   alt="Testimonial"
  //                                   />
  //                             </a>
  //                           </div>
  //                           <h1
  //                               style="
  //                                     color: #4653E3;
  //                                     margin-top: 50px;
  //                                     font-size: 32px;
  //                                     "
  //                               >
  //                             Congratulations your account has been created!
  //                           </h1>
  //                           <p
  //                             style="
  //                                     color: #455056;
  //                                     font-size: 15px;
  //                                     line-height: 24px;
  //                                     margin: 0;
  //                                     "
  //                             >
  //                             Please click on the button below to continue the signup process 
  //                           </p>
  //                           <a
  //                             href="${url}"
  //                             style="
  //                                     background: #4653E3;
  //                                     text-decoration: none !important;
  //                                     font-weight: 500;
  //                                     margin-top: 35px;
  //                                     color: #fff;
  //                                     text-transform: uppercase;
  //                                     font-size: 14px;
  //                                     padding: 10px 24px;
  //                                     display: inline-block;
  //                                     border-radius: 50px;
  //                                     "
  //                             >Set Password</a>
  //                         </td>
  //                       </tr>
  //                       <tr>
  //                         <td style="height: 40px">&nbsp;</td>
  //                       </tr>
  //                     </table>
  //                   </td>
  //                 </tr>

  //                 <tr>
  //                   <td style="height: 20px">&nbsp;</td>
  //                 </tr>
  //                 <tr>
  //                   <td style="text-align: center">
  //                     <p
  //                       style="
  //                               font-size: 14px;
  //                               color: rgba(69, 80, 86, 0.7411764705882353);
  //                               line-height: 18px;
  //                               margin: 0 0 0;
  //                               "
  //                       >
  //                       &copy; <strong>www.testimonial.wolfmatrix.dev</strong>
  //                     </p>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td style="height: 80px">&nbsp;</td>
  //                 </tr>
  //               </table>
  //             </td>
  //           </tr>
  //         </table>
  //       </body>
  //     </html>
  //     `,
  //   };
  //   this.sendEmailService.sendEmail(
  //     email,
  //     (error) => console.log('Failed!: ', error),
  //     () => console.log('Success!'),
  //   );
  // }

  // async register(data: CreateUserDto) {
  //   data.password = await bcrypt.hash(data.password, 10);
  //   let newUser = await this.usersRepository.create(data);
  //   if (newUser) {
  //     const requestEmailTemplates = [
  //       {
  //         name: "Request Email Template",
  //         subject: "Do you have a moment to provide us with some feedback?",
  //         body: "<p>Hello {{first_name}} {{last_name}},</p><p>We are hoping to get a quick feedback review on your recent experience working with {{name}}.</p><p>You can submit your review by clicking the link: {{testimonial_url}}.</p>",
  //         delivery_days: [1,2],
  //         delivery_time: "12:00",
  //         from: newUser.space.name,
  //         order: 1,
  //         days_interval: 0,
  //         reply_to: newUser.space.contact_email,
  //         space: newUser.space,
  //         created_by: newUser
  //       },
  //       {
  //         name: "First Followup Email Template",
  //         subject: "Do you have a moment to provide us with some feedback?",
  //         body: "<p>Hello {{first_name}} {{last_name}},</p><p>We are hoping to get a quick feedback review on your recent experience working with {{name}}.</p><p>You can submit your review by clicking the link: {{testimonial_url}}.</p>",
  //         delivery_days: [1,2],
  //         delivery_time: "12:00",
  //         from: newUser.space.name,
  //         order: 2,
  //         days_interval: 3,
  //         reply_to: newUser.space.contact_email,
  //         space: newUser.space,
  //         created_by: newUser
  //       },
  //       {
  //         name: "Second Followup Email Template",
  //         subject: "Do you have a moment to provide us with some feedback?",
  //         body: "<p>Hello {{first_name}} {{last_name}},</p><p>We are hoping to get a quick feedback review on your recent experience working with {{name}}.</p><p>You can submit your review by clicking the link: {{testimonial_url}}.</p>",
  //         delivery_days: [1,2],
  //         delivery_time: "12:00",
  //         from: newUser.space.name,
  //         order: 3,
  //         days_interval: 4,
  //         reply_to: newUser.space.contact_email,
  //         space: newUser.space,
  //         created_by: newUser
  //       }
  //   ]
  //     // create new email template here
  //     requestEmailTemplates.forEach((requestEmailTemplate)=>{
  //       this.emailTemplateRepository.saveEmailTemplate(requestEmailTemplate,newUser);
  //     })

  //     const placeholderLogo:Media = await this.mediaRepository.findOneMediaByName(PLACEHOLDER_LOGO_NAME);
  //     const defaultLandingpageTemplate = {
  //       name: "default",
  //       title: "Hello {{first_name}}, Submit Testimonial",
  //       description: "<p>You can submit your testimonials either in the video or in the text as well and please answer the following questions as prossible.Who are you ? How the product has helped you ? What is the bets thing about our product ?</p>",
  //       thankyou_text: "Thank you",
  //       space: newUser.space,
  //       created_by: newUser
  //     }
  //     // create new landing page template here
  //     let landingpageTemplate = new CreateLandingPageTemplateDto();
  //     landingpageTemplate = {...defaultLandingpageTemplate};

  //     await this.landingpageTemplateRepository.saveLandingpageTemplate(landingpageTemplate,placeholderLogo,newUser);
  //     newUser.roles = formatPermission(newUser.roles);
  //     const { password, ...result } = newUser;
  //     return this.login(result);
  //   }
  // }

  // async forgetPassword(data: ForgetPasswordDto) {
  //   const user = await this.usersRepository.findUser(
  //     { email: data.email },
  //     true,
  //   );
  //   if (user) {
  //     const id = getEncrypted(`email=${data.email}`);
  //     const url = `${process.env.CORS_ORIGIN}/forgetPassword/change?id=${id}`;
  //     const email: Email = {
  //       email_to: data.email,
  //       subject: 'Reset password',
  //       body: `Please click <a href=${url}><strong>here</strong></a> to reset your password or go to link: ${url} in your browser`,
  //     };
  //     this.sendEmailService.sendEmail(
  //       email,
  //       () => console.log('Failed!'),
  //       () => console.log('Success!'),
  //     );
  //   } else {
  //     throw new HttpException('Email not found.', HttpStatus.NOT_FOUND);
  //   }
  // }
  // async forgetPasswordChange(data: ForgetPasswordChangeDto) {
  //   const password = await bcrypt.hash(data.password, 10);
  //   let response = await this.usersRepository.changeForgotPassword(data.email, password);
  //   if (response) {
  //     response.roles = formatPermission(response.roles);
  //     return this.login(response);
  //   }
  // }
  decodeToken(token: string): any {
    return this.jwtService.decode(token);
  }
}
