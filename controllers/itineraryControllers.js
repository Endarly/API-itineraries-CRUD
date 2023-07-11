const Itinerary = require("../models/itineraryModel");

const itineraryControllers = {
    getAllItinerary: async (req, res) => {
        try {
            const itinerary = await Itinerary.find();
            res.json({
                response: itinerary ? itinerary : [],
                success: true,
                error: null
            });
        } catch (error) {
            res.json({
                response: 'ERROR',
                success: false,
                error: error
            });
        }
    },
    getOneItinerary:() =>{},
    modifyItinerary:() =>{},
    addOneItinerary:() =>{},
    addMultiplesItineraries:() =>{},
    removeItinerary:() =>{},
    removeManyItineraries:() =>{},
};

module.exports = itineraryControllers;
