const express = require('express');

const authCheck = require('../middlewares/authCheck.middleware');

const router = express.Router();

router.get('/',  authCheck , (req,res)=>{

    const login = req.query.login;
    const logout = req.query.logout;
    
    res.render("home" , {
        user : req.user,
        logout :logout,
        login:login
    });
})

module.exports = router;