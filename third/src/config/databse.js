import mongoose from "mongoose";

let connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/kodex')
        console.log('mongodb connected');
        
    } catch (error) {
        console.log('mongodb connection failed');
        
    }
}

export default  connectDB