const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({

        id: {type:Number},
        name: {type:String},
        city: {type:String},
        address: {type:String},
        capacity: {type:Number},
        cost: {type:Number},
        veri: {type:String},
        rating: {type:String}
})

module.exports = mongoose.model("pets", petSchema)