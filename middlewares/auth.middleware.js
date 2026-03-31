const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const authcontroller = require('../controllers/auth.controller');

isAuth =(req,res,next)=>{

const token = req.cookies.token;

if(!token){
    return res.redirect('/login?loginError=1');
}

else{
try{
    
    const decode = jwt.verify(token , process.env.JWT_SECRET);
    req.user = decode;
    next();

}
catch(err){
    res.redirect('/login?loginError=1');
}

}

}

module.exports = isAuth;