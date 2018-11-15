const mongoose  = require('../db/connections')
Schema = mongoose.Schema

const Car = new Schema({
    Horsepower: Number,
    Nitro: String,
    Colors: String,
    Type: String,
    Year: Number,
    Model: String,
})

module.exports = mongoose.model('Car', Car)