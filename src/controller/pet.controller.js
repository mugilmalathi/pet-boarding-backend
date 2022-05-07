const express = require("express")

const Pet = require("../model/pet.model")

const router = express.Router();

router.post("/pets", async (req, res)=>{

    try{
        const pets = await Pet.create(req.body);
        return res.status(201).send({pets})
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/pets", async (req, res)=>{

    try{
        const pets = await Pet.find().lean().exec();
        return res.status(201).send({pets})
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;