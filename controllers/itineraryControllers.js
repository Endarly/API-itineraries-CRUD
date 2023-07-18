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

    getOneItinerary: async (req, res) => {
        const id = req.params.id;
        try {
            const itinerary = await Itinerary.findOne({ _id: id });
            res.json({
                response: itinerary ? itinerary : "The id to query was not found",
                success: itinerary ? true : false,
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

    modifyItinerary: async (req, res) => {
        const id = req.params.id
        const data = req.body.data

        let itinerary
        let error = null

        try {
            itinerary = await Itinerary.findOneAndUpdate({ _id: id }, data, { new: true })
        }
        catch (err) { error = err }
        res.json({
            response: error ? "ERROR" : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    addOneItinerary: async (req, res) => {
        const { cityId, nameItinerary, creatorName, creatorPhoto, unitPrice, duration, hastags, likes, description} = req.body.data;
        try {
            const verifyItineraryExist = await Itinerary.find({ nameItinerary: { $regex: nameItinerary, $options: 'i' } });
            if (verifyItineraryExist.length === 0) {
                const newItinerary = await new Itinerary({
                    cityId: cityId,
                    nameItinerary: nameItinerary,
                    creatorName: creatorName,
                    creatorPhoto: creatorPhoto,
                    unitPrice: unitPrice,
                    duration: duration,
                    hastags: hastags,
                    likes: likes,
                    description: description,
                }).save();
                res.json({
                    response: newItinerary,
                    success: true,
                    error: null
                });
            } else {
                res.json({
                    response: "ERROR",
                    success: false,
                    error: "The Itinerary already exists in the DB with the id" + verifyItineraryExist[0]._id
                });
            }
        } catch (error) {
            res.json({
                response: 'ERROR',
                success: false,
                error: error
            });
        }
    },

    addMultiplesItineraries: async (req, res) => {
        let error = [];
        let itinerary = [];
        for (let itinerary of req.body.data) {
            try {
                let verifyItineraryExist = await Itinerary.find({ nameItinerary: { $regex: itinerary.itinerary, $options: 'i' } });
                if (verifyItineraryExist.length == 0) {
                    let dataItinerary = {
                        nameItinerary: itinerary.nameItinerary,
                        cityId: itinerary.cityId,
                        creatorName: itinerary.creatorName,
                        creatorPhoto: itinerary.creatorPhoto,
                        unitPrice: itinerary.unitPrice,
                        duration: itinerary.duration,
                        hastags: itinerary.hastags,
                        likes: itinerary.likes,
                        description: itinerary.description,
                    };
                    await new Itinerary({ ...dataItinerary }).save();
                    itinerary.push(dataItinerary);
                } else {
                    error.push({
                        nameItinerary: itinerary.nameItinerary,
                        result: "Already exists in the DB with the id: " + verifyItineraryExist[0]._id
                    });
                }
            } catch (err) {
                error.push({ nameItinerary: itinerary.nameItinerary, err });
            }
        }
        res.json({
            response: error.length > 0 && itinerary.length === 0 ? "ERROR" : itineitineraryraries,
            success: error.length > 0 ? (itinerary.length > 0 ? "warning" : false) : true,
            error: error
        });
    },
    removeItinerary:() =>{},
    removeManyItineraries:() =>{},
};

module.exports = itineraryControllers;
