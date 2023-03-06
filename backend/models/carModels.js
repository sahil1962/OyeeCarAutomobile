const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    name : {type : String, require},
    year : {type : Number, require},
    colors: [] ,
    prices : {type : Number, require},
    EngineDisplacement : {type : Number, require},
    Mileage : {type : Number, require},
    BodyStyle : {type : String, require},
    Transmission : {type : String, require},
    image : {type : String, require},
},{
    timetamps:true,
})

const carModel = mongoose.model("cars", carSchema);
module.exports = carModel