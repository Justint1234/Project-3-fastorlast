const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const driverController = require('../controllers/driverController')
const userController = require('../controllers/userController')

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

router.get('/api/user', userController.index)
router.post('/api/user/', userController.create)
router.get('/api/user/:userId', userController.show)
router.patch('/api/user/:userId', userController.update)
router.delete('/api/user/:userId', userController.delete)

module.exports = router