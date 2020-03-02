const mongoose = require('mongoose');
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {type: String, required: true, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: {type: Date, required: true}
})


const flightsSchema = new Schema({
    airline: {type: String, required: true, enum: ['American', 'Southwest', 'United']},
    flightNo: {type: Number, required: true, min: 10, max: 9999, default: 10},
    departs: {type: Date, required: true, default: Date.now},
    airport: {type: String, required: true, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    destinations: [destinationSchema],
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
}, {
    timestamps: true    
});

module.exports = mongoose.model('Flight', flightsSchema);
 