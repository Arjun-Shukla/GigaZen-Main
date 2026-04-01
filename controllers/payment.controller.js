const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET
});

exports.createOrder = async function(req,res){
try{
    
    const options = {
    
    amount : 119900,
    currency : "INR",
    receipt : "order_recptd_1"
    
    }
    
    const order = await instance.orders.create(options);
    res.json(order);
 
}
catch(err){
    console.log(err)
    res.status(501).send("Order Create Not Available");
}

}