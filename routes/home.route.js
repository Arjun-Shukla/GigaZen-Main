const express = require("express");

const authCheck = require("../middlewares/authCheck.middleware");

const FeedbackModel = require("../models/feedback.model");

const router = express.Router();

router.get("/", authCheck, (req, res) => {

  const login = req.query.login;
  const logout = req.query.logout;
  const feedback = req.query.feedback;

  res.render("home", {
    user: req.user,
    logout: logout,
    login: login,
    feedback : feedback
  });
});

router.get('/about' , (req,res)=>{
  res.render('aboutus');
});

router.get('/privacy' , (req,res)=>{
  res.render('privacy');
});

router.get('/refund' , (req,res)=>{
  res.render('refund');
});

router.get('/terms' , (req,res)=>{
  res.render('terms');
});

router.post("/", async (req, res) => {

  const suggestion = req.body;

  try {

    await FeedbackModel.create(suggestion);
    res.redirect('/?feedback=1');
    
  } 
  catch (err) {

res.status(501).send('bad request');

  }
});

module.exports = router;
