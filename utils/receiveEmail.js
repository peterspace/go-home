const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const receiveEmail = async (subject, message, send_to, sent_from, reply_to) => {
  // Create Email Transporter

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  );

  // Option for sending email
  const options = {
    from: send_to, // to server
    to: sent_from, // from user
    replyTo: reply_to,
    subject: subject,
    html: message,
    // text: message,
  };

  // send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = receiveEmail;
