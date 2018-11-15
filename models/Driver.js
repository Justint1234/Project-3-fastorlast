const mongoose = require('..db/connections')
const Schema = mongoose.Schema

const Driver = new Schema ({
    wins: Number,
    losses: Number,
    experience: String, 
    cars: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        }
    ]
})

module.exports = mongoose.model('Driver', Driver)