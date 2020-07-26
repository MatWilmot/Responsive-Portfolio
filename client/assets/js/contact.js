$(document).ready(function () {
  $(".sidenav").sidenav();
  $("select").formSelect();

  let message = {};

  // get the form contents
  const getMessage = () => {
    message = {
      firstName: $("#first_name").val(),
      lastName: $("#last_name").val(),
      email: $("#email").val(),
      subjectList: $("#subject-list").val(),
      subject: $("#subject").val(),
      message: $("#message").val(),
    };
  };

  $("#subject-list").on("change", () => {
    if ($("#subject-list").val() === "Other") {
      $("#custom-subject").attr("style", "");
      $("select").formSelect();
    } else {
      $("#custom-subject").attr("style", "display: none;");
      $("select").formSelect();
    }
  });

  // send the email
  $("#submit-btn").on("click", () => {
    getMessage();
    sendMessage(message);
    clearForm();
  });

  // clear the form
  $("#clear-btn").on("click", () => {
    clearForm();
  });

  const clearForm = () => {
    $("#first_name").val("");
    $("#last_name").val("");
    $("#email").val("");
    $("#subject-list").val("0");
    $("#subject").val("");
    $("#message").val("");
    $("select").formSelect();
  };

  const sendMessage = (message) => {
    $.ajax({
      type: "POST",
      url: "/email",
      data: message,
    }).then((res) => {
      console.log(res);
    });
  };
});

// // nodemailer code from video
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     // user: process.env.EMAIL,
//     // pass: process.env.PASSWORD,
//   },
// });

// let mailOptions = {
//   from: "email",
//   to: "matwilmot90@gmail.com",
//   subject: "New Message",
//   text: "Does this send every single time I save my work?",
// };

// transporter.sendMail(mailOptions, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("sent");
//   }
// });
