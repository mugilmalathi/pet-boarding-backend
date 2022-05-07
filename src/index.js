const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT;

const petController = require("./controller/pet.controller");

app.use("/", petController);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB is Connected..!")
    }catch(err){
        console.log(err)
    }
})