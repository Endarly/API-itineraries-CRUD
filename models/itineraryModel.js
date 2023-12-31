const mongoose = require("mongoose")

const itinerarySchema =new mongoose.Schema({
    nameItinerary:{type:String, required:true},
    creatorName:{type:String},
    creatorPhoto:{type:String},
    unitPrice:{type:Number},
    duration:{type:Number},
    hastags:{type:String},
    likes:{type:Number},
    cityId:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary 