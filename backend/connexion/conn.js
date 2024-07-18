const mongoose = require("mongoose");

const conn = async(req,res) =>{
   try {
    await mongoose
    .connect("mongodb+srv://tonyfreddy201:KB2JkKDD0EdbfZ7E@cluster0.k2qerzn.mongodb.net/")
    .then(()=>{
       console.log("connected");
    });
   } catch (error) {
    res.status(400).json({
        message: "Not connected",
    });
   }
};
conn();