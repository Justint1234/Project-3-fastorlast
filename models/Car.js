const mongoose  = require('../db/connections')
Schema = mongoose.Schema

const Car = new Schema({
    Horsepower: Number,
    Make: String,
    Color: String,
    Type: String,
    Year: Number,
    Model: String,
    Image: String
})

module.exports = mongoose.model('Car', Car)