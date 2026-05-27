import mongoose from "mongoose";
import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])
let connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://todo:todo12345@cluster0.pqscxrt.mongodb.net/')
        console.log('mongodb connected');
        
    } catch (error) {
        console.log('mongodb connection failed', error);
        
    }
}

export default  connectDB