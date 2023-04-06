import  comparePass from "../helper/comparePass.js";
import signInModel from "../models/signInModel.js";


const vLoginController = async (req,res) => {
    try {
        const {email,password} = req.body
      
        if(!email){
            console.log("email not found")
            return res.send({
                success:false,
                message:"email is require"
            })
        }
        if(!password){
            console.log("password not found")
            return res.send({
                success:false,
                message:"password is require"
            })
        }

            const user =await signInModel.findOne({email})
            console.log(user)
            if(!user){
                return res.send({
                    success:false,
                    message:"Register Yourself, you are not Queen victoria"
                })
            }else{
                console.log("before match")
                const match = await comparePass(password,user.password)
                console.log("After match")
                console.log("match object",match)
                if(!match){
                    return res.status(404).send({
                        success:false,
                        message:"password is incorrect"
                    })
                }else{

                    // const token = user.tokens
                    // console.log(token,"token")
                    // // res.cookie("loginToken", token)
                    // res.cookie("loginToken", token, { 
                    //     sameSite: 'none', 
                    //     secure: true,
                    //     httpOnly:true
                    //   });
                      
                    return res.status(200).send({
                        success:true,
                        message:"login successfull",
                        user:user

                    })
                }
            }
        

    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"error in login backend",
            error
        })
    }
}
export default vLoginController