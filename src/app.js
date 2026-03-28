const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.set('view engine' , 'ejs');

//routes
const homeRoute = require('../routes/home.route');
const paymentRoute = require('../routes/payment.route');
const loginRoute = require('../routes/login.route');

app.use('/' , homeRoute);
app.use('/payment' , paymentRoute);
app.use('/login' , loginRoute);

module.exports = app;