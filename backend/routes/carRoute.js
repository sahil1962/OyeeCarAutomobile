const express = require("express");
const router = express.Router();
const Car = require("../models/carModels")

router.get("/getallcars", async(req, res)=>{

    try {
        const cars = await Car.find({})
        // console.log(cars)
        res.send(cars)
        // return res.status(200).json(cars)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message : error});
    }

});

module.exports = router;