const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv= require("dotenv")
const connection = require('./db');
const bookRouter = require('./routes/bookroutes');
dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
app.use("/book",bookRouter)

// console.log(process.env.MONGODB_URL)
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to Db")
        console.log(`server running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
    
})
