
import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';
configDotenv();

//send account confirmation email
const sendEmail = (name, user_mail)=>{
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.USER_EMAIL,
            pass: process.env.USER_EMAIL_PASSWORD
        }
    });

     // Setup email data
    var mailOptions = {
        from: process.env.USER_EMAIL,
        to: `${user_mail}`,
        subject: 'Account created successfully',
        html: emailTemplate(name, '#')
    }
    
    transport.sendMail(mailOptions, (err, info)=>{
        if(err) throw err;
        console.log("Email sent:" + info.response);
    });
}

// Email template for account confirmation
const emailTemplate = (name, confirmationLink) => {
    return `
        <p>Hi <b>${name}</b>,</p>
        <p>Welcome to our platform! Please click the link below to confirm your account:</p>
        <a href="${confirmationLink}" target="_blank">Click</a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>Best regards,<br/>My Team</p>
    `;
};

export default sendEmail;