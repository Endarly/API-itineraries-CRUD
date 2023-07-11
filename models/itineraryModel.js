const mongoose = require("mongoose")

const itinerarySchema =new mongoose.Schema({
    nameItinerary:{type:String, required:true},
    creatorName:{type:String},
    creatorPhoto:{type:String},
    unitPrice:{type:Number},
    duration:{type:Number},
    hastags:{type:String},
    likes:{type:Number},
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary