import  JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req,res,next) =>{
    try {
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_TOKEN)
        req.user = decode
        next();
         
    } catch (error) {
        console.log(error)
    }
}

export const isAdmin = async (req,res,next) => {
    try {
        const {email,password} = req.body
        console.log(email,password)
        const user = await userModel.findOne({email})
        console.log(user)

        if(user.role === 1){
            return res.status(401).send({
                success:true,
                message:"User is Admin"
            });
            next();
        }else{
            res.status(404).send({
                success:false,
                message:"pata nahi"
            })
            
        }
    } catch (error) {
        res.status(401).send({
            error,
            success:false,
            message:"Error in admin Middleware",

        })
    }
}