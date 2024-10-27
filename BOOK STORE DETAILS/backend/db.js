const mongoose =require("mongoose")
const dotenv = require("dotenv")
dotenv.config
const connection = mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/bookstore")


module.exports=connection