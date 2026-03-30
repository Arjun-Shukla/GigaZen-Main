const express = require('express');

const router = express.Router();

router.get('/' , (req,res)=>{
    const success = req.query.success;
    res.render('login' , {success});
})

module.exports = router;