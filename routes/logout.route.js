const express = require('express');

const cookieParser = require('cookie-parser');

const router = express.Router();

router.get('/' , (req,res)=>{
    res.clearCookie("token");
    // res.redirect('home');
    return res.redirect('/?logout=1');
});

module.exports = router;