const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'naoldemisse14@gmail.com',
    pass: 'Naolalemayehu898@'
  }
});

let mailOptions = {
  from: 'naolalemayheu898@gmail.com',
  to: 'naoldemisse14@gmail.com',
  subject: 'Email Verification',
  text: 'Your verification code is 123456'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});