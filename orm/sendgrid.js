require("dotenv").config();

const sendMessage = (message) => {
  const data = {
    from: `Excited User <${message.email}>`,
    to: "matwilmot90@gmail.com",
    subject: `${message.subject} ${message.subjectList}`,
    text: `${message.message}

from: ${message.firstName} ${message.lastName}
email: ${message.email}`,
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
};

module.exports = { sendMessage };
