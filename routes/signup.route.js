const express = require("express");

const router = express.Router();

//routes
router.get("/", (req, res) => {

  const register = req.query.register;

  res.render("signup" , {

    register:register
  });
});

module.exports = router;
