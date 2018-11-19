const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const driverController = require('../controllers/driverController')

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

module.exports = router