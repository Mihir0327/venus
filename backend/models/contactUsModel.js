import mongoose from "mongoose";


const contactModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
})

export default mongoose.model('tickets',contactModel)