const mongoose = require('mongoose');

const DBconnect = async ()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Databse Connected Sucessfully");
}

module.exports = DBconnect;

