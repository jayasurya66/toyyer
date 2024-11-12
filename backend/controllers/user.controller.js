import User from "../models/user.model.js"
import bcrypt from "bcrypt"

const Register = async(req, res) => {
    const {name, email, password} = req.body;

    try {
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({success : false, msg : "User Already Exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const saveUser = new User({
            name, email, password : hashPassword
        })

        await saveUser.save()

        return res.json({success : true, msg : "User Created Successful"})

    } catch (error) {
        console.log(error)
        res.status(500).json({success : false, msg : error.message})
    }
}

export {
    Register
}