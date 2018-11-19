const Car = require('../models/Car')

const carsControllers = {
    index: (req, res) => {
        Car.find({})
        .then((cars) => {
            console.log(cars)
            res.send(cars)
        })
    },
    show: (req, res) => {
        let carId = req.params.carId
        Car.find(car) 
        .then((car) => {
            res.send(car)
        })
    },
    delete: (req, res) => {
        let carId = req.params.carId
        Car.findByIdAndDelete(carId)
        .then(() => {
            res.send(200)
        })
    },
    update: (req, res) => {
        let carId  = req.params.carId
        Car.findByIdAndUpdate(carId, req.body, {new: true})
        .then((updatedCar) => {
            updatedCar.save()
            res.send(updatedCar)
        })
    },
    create: (req, res) => {
            Car.create(req.body)
            .then((newCar) => {
                console.log(newCar)
                res.send(newCar)
                res.redirect(`/api/car`)
            })
    }
}
module.exports = carsControllers