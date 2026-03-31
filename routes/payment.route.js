const express = require('express');

const router = express.Router();

const isAuth = require('../middlewares/auth.middleware');
const paymenthandle = require('../controllers/payment.controller');

router.get('/' , isAuth ,(req,res)=>{
    res.render("payment");
})

router.post('/create-order' , paymenthandle.createOrder);

module.exports = router;