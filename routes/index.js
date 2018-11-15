const express = require('express')
const router = express.Router()
const carsController = require('../controllers/carsController')
const driversController = require('../controllers/driversController')

router.get('/api/cars', carsController.index)
router.post('/api/cars/', carsController.create)
router.get('/api/cars/:carsId', carsController.show)
router.patch('/api/cars/:carsId', carsController.update)
router.delete('/api/cars/:carsId', carsController.delete)

router.get('/api/drivers/:driversId/drivers', driversController.index)
router.get('/api/drivers/:driversId', driversController.show)
router.delete('/api/drivers/:driversId', driversController.delete)
router.patch('/api/drivers/:driversId', driversController.update)
router.post('/api/drivers/:driversId/drivers', driversController.create)

module.exports = router