var API_KEY = "1012824b799f7f8486f1962cf7f284ed-a65173b1-7eb6a907";
var DOMAIN = "sandbox03eab7d893ec4cc6b435ee54a51033bc.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

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
