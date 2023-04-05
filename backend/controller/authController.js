import comparePass from "../helper/authHelper.js";
import hashPassword from "../helper/authHelper.js";
import contactUsModel from "../models/contactUsModel.js";
import userModel from "../models/userModel.js";

import JWT from "jsonwebtoken"

 export const registerController = async (req,res)=> {
 try {
    const {name,email,password,phone,role} = req.body;

    console.log(req)

    if(!name){
        return  res.status(500).send({
            success:false,
            message:'name is req',
            error
        })
    }
    if(!email){
        return  res.status(500).send({
            success:false,
            message:'email is req',
            error
        })
    }
    if(!password){
        return  res.status(500).send({
            success:false,
            message:'password is req',
            error
        })
    }
    if(!phone){
        return  res.status(500).send({
            success:false,
            message:'Phone number is req',
            error
        })
    }
    if(!role){
        return  res.status(500).send({
            success:false,
            message:'role is req',
            error
        })
    }


    const existingUser = await userModel.findOne({email})
    if(existingUser){
        return res.status(200).send({
            success:true,
            messgae:"Already register"
        })
    }
    const hashedPassword = await hashPassword(password)
    const user =await new userModel({name,email,password:hashedPassword,phone,role}).save()
    res.status(201).send({
        success:true,
        message:"user register successFull",
        user
    })
    const ins = await userModel.insertMany({name,email,password:hashedPassword,phone,role})
    
 } catch (error) {
    console.log("error..",error)
    res.status(500).send({
        success:false,
        message:'Error in registration',
        error
    })
 }
}


export const contactusController = async(req,res) =>{
    try {
        const {name,phone,email,msg} = req.body
        if(!name){
            return res.send({
                message:"name is req",
                success:false
            })
        }
        else if(!email){
            return res.send({
                message:"email is req",
                success:false
            })
        }
        else if(!phone){
            return res.send({
                message:"phone is req",
                success:false
            })
        }
        else if(!msg){
            return res.send({
                message:"msg is req",
                success:false
            })
        }else{
                res.status(200).send({
                    success:true,
                    message:"sended successfully"
                })
                const cu = contactUsModel.insertMany({name,phone,email,msg})
            }
         
        
    } catch (error) {
        res.status(404).send({
            success:false,
            message:"error in contact us"
        })
    }
}


export const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Credential not match"
            })
        }
        const user = await userModel.findOne({email})
    if(!user){
       return res.status(404).send({
            success:true,
            message:"email not registered",
        })
    }
        const match = await comparePass(password,user.password)
        if(!match){
            return res.status(404).send({
                 success:true,
                 message:"password not match",
             })
         }

         const token = await JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, { expiresIn: '7d' });
         res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                role:user.role
            },token
         })
        
    } catch (error) {
        console.log("error in login")
        res.status(500).send({
            success:false,
            message:"Login unsuccessfull"
        })
    }
};


export const testController = (req,res) =>{
    res.send("test route")
};


export const userUpdateController = async (req,res) =>{
   try {
    const {email,password,roleset} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        res.status(601).send({
            success:false,
            message:"User not found"
        })
    }else{
        const match = await comparePass(password,user.password)
        if(match){
           const update1 = await userModel.updateOne({email},{$set:{role:roleset}})
           
           res.status(200).send({
            success:true,
            message:"Updated"
           })
           console.log(update1)
        }else{
            res.status(404).send({
                success:false,
                message:"Password not match"
             })
        }
    }

   } catch (error) { 
     res.status(404).send({
        success:false,
        message:"User not found and Cannot update"
     })
   }
}



