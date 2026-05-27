import mongoose from "mongoose";

let connectDb  =async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/kodex')
        console.log('mongodb connect successfully');
        
    } catch (error) {
        console.log(error, 'mongodb connection failed');
        
    }
}

export default  connectDb