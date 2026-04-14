const express = require('express');

const router = express.Router();

const isAuth = require('../middlewares/auth.middleware');
const paymenthandle = require('../controllers/payment.controller');
const sendmail = require('../config/mailsend');
const authcontroller = require('../controllers/auth.controller');

router.get('/' , isAuth ,(req,res)=>{
    const mail = req.query.mail;
    res.render("payment" ,{
        mail:mail
    });
});

router.get('/1' , isAuth , async (req,res)=>{

        try {
        if (!req.user) {
            return res.send("User not authenticated");
        }

    const email = req.user.email;
    const name = req.user.name;
    await sendmail(`${email}`,
        "Complete Your GigaZen Plan 🎮" , 
        `Hi ${name},

You're just one step away from unlocking your gaming experience on GigaZen 🚀

🧾 Selected Plan: ZEN BASIC
💰 Price: 299 / month

🎮 What you get:
• 3 games access
• 0 premium games
• 60 hrs/month gameplay
• 24×7 support

👉 Complete your payment to start playing instantly:

🔗 UPI - arjun99@fam
🔗 Number - 6306380335

If you have any questions, feel free to reach out at support@gigazen.in

Let the games begin 🔥

- Team GigaZen
🌐 www.gigazen.in`
    );
res.redirect('/payment?mail=1');

    } catch (err) {
        console.log(err);
        res.send("Error sending mail");
    }
});

router.get('/2' , isAuth , async (req,res)=>{

            try {
        if (!req.user) {
            return res.send("User not authenticated");
        }

    const email = req.user.email;
    const name = req.user.name;
    await sendmail(`${email}`,
        "Complete Your GigaZen Plan 🎮" , 
        `Hi ${name},

You're just one step away from unlocking your gaming experience on GigaZen 🚀

🧾 Selected Plan: ZEN PREMIUM
💰 Price: 499 / month

🎮 What you get:
• 8-10 games access
• 3 premium games
• 90 hrs/month gameplay
• 24×7 support

👉 Complete your payment to start playing instantly:

🔗 UPI - arjun99@fam
🔗 Number - 6306380335

If you have any questions, feel free to reach out at support@gigazen.in

Let the games begin 🔥

- Team GigaZen
🌐 www.gigazen.in`
    );
res.redirect('/payment?mail=1');

    } catch (err) {
        console.log(err);
        res.send("Error sending mail");
    }

});

router.get('/3' , isAuth , async(req,res)=>{

                try {
        if (!req.user) {
            return res.send("User not authenticated");
        }

    const email = req.user.email;
    const name = req.user.name;
   await sendmail(`${email}`,
        "Complete Your GigaZen Plan 🎮" , 
        `Hi ${name},

You're just one step away from unlocking your gaming experience on GigaZen 🚀

🧾 Selected Plan: ZEN BASIC
💰 Price: 1199 / month

🎮 What you get:
• 15-20 games access
• 8-10 premium games
• 120 hrs/month gameplay
• 24×7 support

👉 Complete your payment to start playing instantly:

🔗 UPI - arjun99@fam
🔗 Number - 6306380335

If you have any questions, feel free to reach out at support@gigazen.in

Let the games begin 🔥

- Team GigaZen
🌐 www.gigazen.in`
    );
res.redirect('/payment?mail=1');

    } catch (err) {
        console.log(err);
        res.send("Error sending mail");
    }
});

// router.post('/create-order' , paymenthandle.createOrder);

module.exports = router;