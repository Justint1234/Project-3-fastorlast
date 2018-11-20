const Users = require('../models/Users');

const usersController = {
    index: (req, res) => {
        Users.find({})
            .then((users) => {
                res.send(users)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('users')
        .then((users) => {
            res.send(users)
        })
    },
    update: (req, res) => {
        Users.findByIdAndUpdate(req.params.usersId, req.body)
        .then((updatedUsers) => {
            updatedUsers.save()
            res.send(updatedUsers)
        })
    },
    delete: (req, res) => {
        Users.findByIdAndDelete(req.params.usersId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Users.create(req.body)
        .then((users) => {
            res.send(users)
        })
    }
}

module.exports = usersController