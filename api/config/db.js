import mongoose from "mongoose";



// create a mongoDB connection 
const connectDB = async() => {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongoDB connected successfully.`.bgMagenta.black);
}

// export mongo connection 

export default connectDB;