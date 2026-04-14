const nodemailer = require('nodemailer');

//transporter

const transporter = nodemailer.createTransport({

    secure:false,
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:'noreply@gigazen.in',
        pass:'lbjwyxwywlnhtoba'
    }
});

function sendmail(to,subject,msg){

    transporter.sendMail({
        from: '"GigaZen" <noreply@gigazen.in>',
        to:to,
        subject:subject,
        html:msg
    });
}

module.exports = sendmail;




