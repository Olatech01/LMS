const mongoose = require("mongoose")

const { Schema, model} = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['student', 'instructor', 'admin'], 
        default: 'student'
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},
    {timestamps:true}
);

const userModel = model("user", userSchema)


module.exports = userModel