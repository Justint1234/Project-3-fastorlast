const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const driverController = require('../controllers/driverController')
const usersController = require('../controllers/usersController')

router.get('/api/car', carController.index)
router.post('/api/car/', carController.create)
router.get('/api/car/:carId', carController.show)
router.patch('/api/car/:carId', carController.update)
router.delete('/api/car/:carId', carController.delete)

router.get('/api/driver', driverController.index)
router.get('/api/driver/:driverId', driverController.show)
router.delete('/api/driver/:driverId', driverController.delete)
router.patch('/api/driver/:driverId', driverController.update)
router.post('/api/driver', driverController.create)

router.get('/api/users', usersController.index)
router.post('/api/users/', usersController.create)
router.get('/api/users/:usersId', usersController.show)
router.patch('/api/users/:usersId', usersController.update)
router.delete('/api/users/:usersId', usersController.delete)

module.exports = router