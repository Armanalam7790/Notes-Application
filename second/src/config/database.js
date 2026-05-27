import mongoose from "mongoose";

let connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/kodex')
        console.log('mongodb connected');
        
    } catch (error) {
        console.log('mongodb connection failed');
        
    }
}

export default  connectDb