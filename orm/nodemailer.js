const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMessage = (message) => {
  // nodemailer code from video
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    logger: true,
  });

  let mailOptions = {
    from: `${message.email}`,
    to: "matwilmot90@gmail.com",
    subject: `${(message.subject, message.subjectList)}`,
    text: `From: ${message.firstName} ${message.lastName}

Message:
${message.message}

Contact:
${message.email}`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sent: " + data.response);
    }
  });
};

module.exports = { sendMessage };
