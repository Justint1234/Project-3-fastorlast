const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const driversController = require('../controllers/driverController')

router.get('/api/car', carController.index)
router.post('/api/car/', carController.create)
router.get('/api/car/:carId', carController.show)
router.patch('/api/car/:carId', carController.update)
router.delete('/api/car/:carId', carController.delete)

router.get('/api/drivers/:driversId/drivers', driversController.index)
router.get('/api/drivers/:driversId', driversController.show)
router.delete('/api/drivers/:driversId', driversController.delete)
router.patch('/api/drivers/:driversId', driversController.update)
router.post('/api/drivers/:driversId/drivers', driversController.create)

module.exports = router