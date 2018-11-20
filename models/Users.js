const mongoose  = require('../db/connections')
Schema = mongoose.Schema

const Users = new Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('Users', Users)