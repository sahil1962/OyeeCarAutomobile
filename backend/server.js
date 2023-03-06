// entry point for db

const express = require("express");

const Car = require("./models/carModels")

const app = express();
const db = require("./db.js");
app.use(express.json());

const cors = require('cors')
app.use(cors())
app.use("*", cors())

const carsRoute = require("./routes/carRoute")
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/ordersRoute")


app.use("/api/cars", carsRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", userRoute)


app.get("/", (req, res) => {
    res.send("Server Working 🔥 " + port);
});

// app.get("/getcars", (req, res)=>{

//     Car.find({}, (err, docs)=>{
    
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })
// });

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port 🔥");