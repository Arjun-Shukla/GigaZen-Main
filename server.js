const express = require('express');
const app = require('./src/app');

require('dotenv').config();

app.listen(80 , ()=>{
    console.log("Server Running Successfully.......");
});