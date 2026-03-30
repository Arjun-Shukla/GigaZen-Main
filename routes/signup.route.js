const express = require("express");

const router = express.Router();

//routes
router.get("/", (req, res) => {
  res.render("signup");
});

module.exports = router;
