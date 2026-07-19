const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect(process.env.MONGO_URI)  
    // halley is db where as before that is cluster
    
    console.log("Db connected")

}

module.exports = connectDB