const router = require("express").Router();
const path = require("path");

// set up '/' as the landing page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

router.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/projects.html"));
});

router.get("/about-me", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/about-me.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/contact.html"));
});

module.exports = router;
