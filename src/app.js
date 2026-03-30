const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();

//database
require('dotenv').config();
const DBconnect = require('../config/db');

DBconnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine' , 'ejs');

//routes
const homeRoute = require('../routes/home.route');
const paymentRoute = require('../routes/payment.route');
const loginRoute = require('../routes/login.route');
const signupRoute = require('../routes/signup.route');
const authRoute = require('../routes/auth.route');

app.use('/' , homeRoute);
app.use('/payment' , paymentRoute);
app.use('/login' , loginRoute);
app.use('/signup' , signupRoute);
app.use('/auth' , authRoute);

module.exports = app;