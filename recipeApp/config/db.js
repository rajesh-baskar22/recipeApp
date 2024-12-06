const mongoose =require("mongoose");

const connectDB =async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/recipeApp");
        console.log("database connected");
    } catch(error){
        console.log("database connection failed");
    }
};

module.exports =connectDB;