$(document).ready(function () {
  $(".sidenav").sidenav();
  $("select").formSelect();

  let message = {};

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

  $("#submit-btn").on("click", () => {
    getMessage();
    console.log(message);
  });

  $("#clear-btn").on("click", () => {
    $("#first_name").val("");
    $("#last_name").val("");
    $("#email").val("");
    $("#subject-list").val("0");
    $("#subject").val("");
    $("#message").val("");
    $("select").formSelect();
  });
});
