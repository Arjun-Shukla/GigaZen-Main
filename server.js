const express = require('express');
const app = require('./src/app');

require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT ,()=>{
    console.log("Server Running Successfully.......");
});

//server running above this side, running on some port, as said on .env file , marking above but not legally advised to push on github.