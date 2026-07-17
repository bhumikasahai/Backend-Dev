const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb+srv://yt:ZbxHClVfE4aWyO5G@cluster0.re5rmwv.mongodb.net/halley")  
    // halley is db where as before that is cluster
    
    console.log("Db connected")

}

module.exports = connectDB