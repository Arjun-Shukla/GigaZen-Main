const Razorpay = require("razorpay");

const instance = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,

});

exports.createOrder = async function (req, res) {

  try {

    const amount = req.body.amount;

    if (!amount || amount <= 0) {

      return res.status(400).send("Invalid amount");

    }

    const options = {

      amount: amount * 100,
      currency: "INR",
      receipt: "order_" + Date.now(),

    };

    const order = await instance.orders.create(options);
    res.json(order);

  } catch (err) {

    console.log(err);
    res.status(500).send("Order Create Not Available");
  }
};
