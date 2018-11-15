const Driver = require('../models/Driver');
const Car = require('../models/Car');


const driverController = {
    index: (req, res) => {
        Driver.find({})
            .then((drivers) => {
                res.send(drivers)
            })
    },
    show: (req, res) => {
        Driver.findById(req.params.driverId).populate('drivers')
        .then((driver) => {
            res.send(driver)
        })
    },
    update: (req, res) => {
        Driver.findByIdAndUpdate(req.params.driverId, req.body)
        .then((updatedDriver) => {
            updatedDriver.save()
            res.send(updatedDriver)
        })
    },
    delete: (req, res) => {
        Driver.findByIdAndDelete(req.params.DriverId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Driver.create(req.body)
        .then((driver) => {
            res.send(driver)
        })
    }
}

module.exports = driverController