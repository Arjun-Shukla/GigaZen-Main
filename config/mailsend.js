const nodemailer = require('nodemailer');

//transporter

const transporter = nodemailer.createTransport({

    secure:true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user:'noreply@gigazen.in',
        pass:'lbjwyxwywlnhtoba'
    }
});

function sendmail(to,subject,msg){

    transporter.sendMail({
        to:to,
        subject:subject,
        html:msg
    });
}

module.exports = sendmail;




