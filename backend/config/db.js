import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        if(conn){
            console.log("connencted to mongodb")
        }else{
            console.log("NOT connencted to mongodb")
        }
    } catch(err){
        console.log("Error in mongo",err)
    }
}
export default connectDB