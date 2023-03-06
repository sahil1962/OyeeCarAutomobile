const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51KzIqaCwVmjtnYJux4gsTULKnDWu5rRPUmsc3pJnPt9voPfIhQeTNkcsPUw6pGSNU8x7u4kH27avGEfyfNMEkaQM00xN5kreUN")

router.get("/placeorder", async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body
    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })
        const payment = await stripe.paymentIntents.create({
            amount:subtotal*100,
            currency : "pkr",
            customer : customer.id,
            receit_email : token.email
        }, {
            idempotencyKey : uuidv4()
        })
        if(payment){
            res.send("payment done")
        }
        else{
            res.send("payment failed")

        }
    } catch (error) {
        return res.status(400).json({message: "Something went wrong"});

    }



});
module.exports = router