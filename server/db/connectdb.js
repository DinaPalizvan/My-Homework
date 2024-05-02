const mongoose=require("mongoose")
require("dotenv").config()


const connectDB= async(uri)=>{
    try {
        await mongoose.connect(uri)
    } catch (error) {
        console.log(error);
    }
}


module.exports= connectDB