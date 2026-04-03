const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//models
const User = require("../models/user.model");

exports.signup = async (req, res) => {
  const user = req.body;

  try {

    await User.create(user);
    res.redirect("/login?success=1");

  } 
  catch (err) {

    res.redirect("/signup?error=1");
    
  }
}

exports.login = async (req, res) => {
  try {

    // console.log("Request body:", req.body);
    // console.log("Email entered:", req.body.email);
    // console.log("Password entered:", req.body.password);

    const user = await User.findOne({
      email: req.body.email
    });

//  console.log("User from DB:", user);

    if (!user) {
            //   console.log("User not found ❌");
      return res.redirect("/signup?register=1");
    }

    if (user.password !== req.body.password) {
            //   console.log("User not found ❌");
      return res.redirect("/login?error=1");
    }

        // console.log("Login successful ✅");
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token);
    // res.json(token);
    req.users = token;
    return res.redirect('/?login=1');

  } catch (err) {

    console.log(err);
    return res.redirect("/login?error=1");

  }
};