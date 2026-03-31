const express = require('express');

const router = express.Router();

router.get('/' , (req,res)=>{

    const loginError = req.query.loginError;
    const success = req.query.success;
    const error = req.query.error;

    res.render('login' , {
        success:success,
        loginError:loginError,
        error:error
    });
})

module.exports = router;