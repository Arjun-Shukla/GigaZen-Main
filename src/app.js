const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.set('view engine' , 'ejs');

const homeRoute = require('../routes/home.route');

app.use('/' , homeRoute);

module.exports = app;