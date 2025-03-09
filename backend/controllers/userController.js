import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";

export const registerControllers = async (req, res, next) => {
    try{
        const {name,phone, email,gender,maritalstatu,username, password} = req.body;

        console.log(name,phone, email,gender,maritalstatu,username, password);

        if(!name || !email || !phone || !gender || !maritalstatu || !username || !password){
            return res.status(400).json({
                success: false,
                message: "Please enter All Fields",
            }) 
        }

        let user = await User.findOne({email});
        user = await User.findOne({phone});
        if(user){
            return res.status(409).json({
                success: false,
                message: "User already Exists",
            });
        }

        //preparing encrypted for storing db
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // console.log(hashedPassword);
        let newUser = await User.create({
            name,
            phone, 
            email, 
            gender,
            maritalstatu,
            username,
            password: hashedPassword, 
        });

        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            user: newUser
        });
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }

}
export const loginControllers = async (req, res, next) => {
    try{
        const { email, password } = req.body;

        // console.log(email, password);
  
        if (!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please enter All Fields",
            }); 
        }
    
        const user = await User.findOne({ email });
    
        if (!user){
            return res.status(401).json({
                success: false,
                message: "User not found",
            }); 
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch){
            return res.status(401).json({
                success: false,
                message: "Incorrect Email or Password",
            }); 
        }

        delete user.password;

        return res.status(200).json({
            success: true,
            message: `Welcome back, ${user.name}`,
            user,
        });

    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}


export const allUsers = async (req, res, next) => {
    try{
        const user = await User.find({_id: {$ne: req.params.id}}).select([
            "email",
            "username",
            "maritalstatu",
            "_id",
        ]);

        return res.json(user);
    }
    catch(err){
        next(err);
    }
}