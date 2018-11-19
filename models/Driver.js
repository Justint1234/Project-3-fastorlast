const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Driver = new Schema({
    Name: String,
    Wins: Number,
    Losses: Number,
    Experience: String,
    Location: String,
    cars: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        }
    ]
})

module.exports = mongoose.model('Driver', Driver)