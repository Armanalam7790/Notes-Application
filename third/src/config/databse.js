import mongoose from "mongoose";

let connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://todo:todo12345@cluster0.pqscxrt.mongodb.net/')
        console.log('mongodb connected');
        
    } catch (error) {
        console.log('mongodb connection failed');
        
    }
}

export default  connectDB