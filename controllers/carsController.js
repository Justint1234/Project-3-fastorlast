const Cars = require('../models/Cars')

const carsControllers = {
    index: (req, res) => {
        User.findById(userId).populate('cars')
        .then((user) => {
            res.send(user.cars)
        })
    },
    show: (req, res) => {
        let carId = req.params.carId
        Car.findById(carId) 
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
        Car.findByAndUpdate(CarId, req.body, {new: true})
        .then((updatedCar) => {
            updatedCar.save()
            res.send(updatedCar)
        })
    },
    create: (req, res) => {
        let userId = req.params.userId
        User.findById(userId)
        .then((user) => {
            console.log(user)
            Car.create(req.body)
            .then((newCar) => {
                console.log(newCar)
                user.cars.push(newCar)
                user.save()
                res.send(newCar)
            })
        })
    }
}
module.exports = carsController