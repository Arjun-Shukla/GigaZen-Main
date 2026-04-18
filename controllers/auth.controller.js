const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//models
const User = require("../models/user.model");

//sendmail
const sendmail = require("../config/mailsend");

exports.signup = async (req, res) => {
  const user = req.body;

  try {

    await User.create(user);
   await sendmail(`"${user.email}"`,
       "Registration Successfull",
        ` <div style="font-family: Arial; background:#f5f5f5; padding:20px;">

    <div style="
      max-width:500px;
      margin:auto;
      background:#ffffff;
      padding:25px;
      border-radius:12px;
      text-align:center;
      box-shadow:0 2px 10px rgba(0,0,0,0.05);
    ">

      <!-- LOGO -->
      <img 
        src="https://gigazen.in/img/logogigazen.jpeg" 
        alt="GigaZen Logo"
        width="80"
        style="margin-bottom:15px;"
      />
      
       <!-- TITLE -->
      <h2 style="margin-bottom:10px;">Welcome, ${user.name} 👋</h2>

      <!-- MESSAGE -->
      <p style="font-size:15px; color:#333;">
        Your <b>GigaZen account is now live 🚀</b>
      </p>

      <p style="color:#555;">
        Step into a world of immersive gaming. Explore, compete, and level up your experience 🎮
      </p>

      <br/>

       <!-- BUTTON -->
      <a href="https://gigazen.in"
        style="
          padding:12px 22px;
          background:#000;
          color:#fff;
          text-decoration:none;
          border-radius:6px;
          font-weight:bold;
          display:inline-block;
        ">
        Start Exploring
      </a>

      <br/><br/>

      <!-- SUPPORT -->
      <p style="font-size:13px; color:#777;">
        Need help? <b>support@gigazen.in</b>
      </p>

            <p style="margin-top:15px;">
        🔥 Let the games begin
      </p>

      <p style="font-size:14px; color:#444;">
        - Team GigaZen
      </p>

    </div>

  </div>

      `);

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
        name: user.name,
        email: user.email
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