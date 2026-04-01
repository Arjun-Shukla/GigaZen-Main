const express = require('express');
const app = require('./src/app');

require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log("Server Running Successfully.......");
});