var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nhienduyvu@gmail.com',
    pass: 'nhien!@#$%^&*(ly)'
  }
});

var mailOptions = {
  from: 'Nhiên cute',
  to: 'vuduynhiennhien@gmail.com',
  subject: 'Xin chào đây là phần test email của mình bạn tôi ạ',
  text: 'I\'learning node js bro'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});