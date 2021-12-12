var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'monagujjar336@gmail.com',
      pass: 'rajahalder1234'
    }
  });

  
var mailOptions = {
    from: 'monagujjar336@gmail.com',
    to: 'rajahaldr2118@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'hi i am raja!'
  };


  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });