require('dotenv').config()
const mongoose = require('mongoose')

 
const connect_String = process.env.MONGO_URI

const connectDB = async ()=>{
    await mongoose.connect(connect_String)
    return console.log("db connected")
}


module.exports = connectDB;
