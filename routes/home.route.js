const express = require('express');

const authCheck = require('../middlewares/authCheck.middleware');

const router = express.Router();

router.get('/',  authCheck , (req,res)=>{

    res.render("home" , {
        user : req.user
    });
})

module.exports = router;