import User from '../model/user.js';
import bcrypt from 'bcryptjs';

export const signupController= async (req,res)=>{
    try {
        const user=await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({
                msg: "user already exist"
            })
        }
        const hashpassword= await bcrypt.hash(req.body.password, 10);
        req.body.password=hashpassword;
        const newUser= await User.create(req.body);
        return res.status(201).json({msg: "user created successfully",
            user :{
                id: newUser._id,
                name :newUser.name,
                email : newUser.email
            }
        });
    } catch (error) {
        return res.status(500).json({msg: "error in creating user",
                  error:error
        })
    }
}


export const loginController= async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message : "Invalid credentials"
            })
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message :"Invalid credentials"
            })
        }

        return res.status(200).json({
            message : "Login successful",
            user: {
                id: user._id,
                name :user.name,
                email :user.email
            }
         
        });

    } catch (error) {
        console.log("error"+ error.message);
        res.status(201).json({msg : "Internal server error"});
    }
}