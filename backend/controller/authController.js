const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')


const register = async(req, res) => {
    const {name, email, password} = req.body

    if(!name){
        return res.json({error: "Fullname is required"})
    }
    if(!email){
        return res.json({error: "Email is required"})
    }
    if(!password){
        return res.json({error: "Password is required"})
    }
    if(!name || !email || !password){
        return res.status(400).json({error: "All fields are required "})
    }
    const existingUser = await userModel.findOne({email})
    if(existingUser){
        return res.json({error: "User already exist"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new userModel({
        name:name,
        email:email,
        password:hashpassword
    })
    await userModel.register(newUser, password, function(err){
        if(err){
            console.log(err);
        }
        // passport.authenticate("local")(req,res, function(err){
        res.json({message: "You have successfully signed up"})
    // })
})


}

module.exports = {
    register
}