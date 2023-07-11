const Router = require("express").Router()

const { get} = require("mongoose")
const itineraryControllers = require("../controllers/itineraryControllers")
const {getAllItinerary, getOneItinerary, modifyItinerary, addOneItinerary, addMultiplesItineraries, removeItinerary, removeManyItineraries} = itineraryControllers

Router.route('/itineraries')
.get(getAllItinerary)
.post((req, res)=>{Array.isArray(req.body.data) ?addMultiplesItineraries(req, res):addOneItinerary(req, res)})
.delete(removeManyItineraries)

Router.route('/itineraries/:id')
.get(getOneItinerary)
.delete(removeItinerary)
.put(modifyItinerary)

module.exports = Router