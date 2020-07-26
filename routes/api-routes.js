const router = require("express").Router();
require("dotenv").config();

const { sendMessage } = require("../orm/nodemailer.js");

router.post("/email", (req, res) => {
  sendMessage(req.body);
  res.send(req.body);
});

module.exports = router;
