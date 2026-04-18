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

router.get('/299' , (req,res)=>{
    res.redirect("upi://pay?pa=arjun99@fam&pn=GigaZen&am=299&cu=INR");
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
        `<div style="font-family: Arial; line-height: 1.6;">
    <h2>Hi ${name} 👋</h2>

    <p>You're just one step away from unlocking your gaming experience on <b>GigaZen 🚀</b></p>

    <h3>📦 Selected Plan: ZEN BASIC</h3>
    <p>💰 Price: <b>₹299 / month</b></p>

    <h3>🎮 What you get:</h3>
    <ul>
      <li>3 games access</li>
      <li>0 premium games</li>
      <li>60 hrs/month gameplay</li>
      <li>24×7 support</li>
    </ul>

    <p><b>👉 Complete your payment to start playing instantly:</b></p>

 <p>💳 UPI: arjun99@fam</p>
    <p>📞 Number: 6306380335</p>

    <br/>

    <a href="https://gigazen.in/payment/299"
      style="padding:12px 20px; background:black; color:white; text-decoration:none; border-radius:5px;">
      Complete Payment
    </a>
    <br/><br/>
    <p>If you have any questions, feel free to reach out at <b>support@gigazen.in</b></p>

    <p>🔥 Let the games begin</p>

    <p>- Team GigaZen</p>
  </div>`
    );
res.redirect('/payment?mail=1');

    } catch (err) {
        console.log(err);
        res.send("Error sending mail");
    }
});

router.get('/499' , (req,res)=>{
    res.redirect("upi://pay?pa=arjun99@fam&pn=GigaZen&am=499&cu=INR");
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
        ` <div style="font-family: Arial; line-height: 1.6;">
    <h2>Hi ${name} 👋</h2>

    <p>You're just one step away from unlocking your gaming experience on <b>GigaZen 🚀</b></p>

    <h3>📦 Selected Plan: ZEN PREMIUM</h3>
    <p>💰 Price: <b>₹499 / month</b></p>

    <h3>🎮 What you get:</h3>
    <ul>
      <li>8-10 games access</li>
      <li>3 premium games</li>
      <li>90 hrs/month gameplay</li>
      <li>24×7 support</li>
    </ul>

    <p><b>👉 Complete your payment to start playing instantly:</b></p>
 <p>💳 UPI: arjun99@fam</p>
    <p>📞 Number: 6306380335</p>

    <br/>

    <a href="https://gigazen.in/payment/499"
      style="padding:12px 20px; background:black; color:white; text-decoration:none; border-radius:5px;">
      Complete Payment
    </a>

    <br/><br/>
    <p>If you have any questions, feel free to reach out at <b>support@gigazen.in</b></p>

    <p>🔥 Let the games begin</p>

    <p>- Team GigaZen</p>
  </div>`
    );
res.redirect('/payment?mail=1');

    } catch (err) {
        console.log(err);
        res.send("Error sending mail");
    }

});

router.get('/1199' , (req,res)=>{
    res.redirect("upi://pay?pa=arjun99@fam&pn=GigaZen&am=1199&cu=INR");
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
        ` <div style="font-family: Arial; line-height: 1.6;">
    <h2>Hi ${name} 👋</h2>

    <p>You're just one step away from unlocking your gaming experience on <b>GigaZen 🚀</b></p>

    <h3>📦 Selected Plan: ZEN PRO</h3>
    <p>💰 Price: <b>₹1199 / month</b></p>

    <h3>🎮 What you get:</h3>
    <ul>
      <li>15–20 games access</li>
      <li>8–10 premium games</li>
      <li>120 hrs/month gameplay</li>
      <li>24×7 priority support</li>
    </ul>

        <div style="text-align:center; margin-top:25px; font-family: Arial;">

  <h3 style="margin-bottom:15px;">
    🎮 Games Available in Your Plan
  </h3>

  <!-- GAME IMAGES -->
  <div>

    <img src="https://gigazen.in/img/Promotion.png"
         width="120"
         style="margin:5px; border-radius:8px;" />

  </div>

  <p style="font-size:13px; color:#666; margin-top:10px;">
    And many more exciting games in future 🚀
  </p>

</div>

    <p><b>👉 Complete your payment to start playing instantly:</b></p>

 <p>💳 UPI: arjun99@fam</p>
    <p>📞 Number: 6306380335</p>

    <br/>

    <a href="https://gigazen.in/payment/1199"
      style="padding:12px 20px; background:black; color:white; text-decoration:none; border-radius:5px;">
      Complete Payment
    </a>

    <br/><br/>
    <p>If you have any questions, feel free to reach out at <b>support@gigazen.in</b></p>

    <p>🔥 Let the games begin</p>

    <p>- Team GigaZen</p>
  </div>`
    );
res.redirect('/payment?mail=1');

    } catch (err) {
        console.log(err);
        res.send("Error sending mail");
    }
});

// router.post('/create-order' , paymenthandle.createOrder);

module.exports = router;