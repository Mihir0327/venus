import mongoose from "mongoose";

const signInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:{
       type:String,
       required:true
    }
},{timestamps:true})

export default mongoose.model('venususer',signInSchema)
// export default mongoose.model('users',userSchema)