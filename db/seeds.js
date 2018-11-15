const Car = require('../models/Car')
const Driver = require('../models/Driver')
const mongoose = require('./connections')

const bugatti = new Car({
    Horsepower: 600,
    Colors: 'Blue',
    Type: 'Exotic',
    Year: 2014,
    Model: 'Hennesy Venom GT'
})

const lamborghini = new Car({
    Horsepower: 630,
    Color: 'Orange',
    Type: 'Luxury',
    Year: 2018,
    Model: 'Huracan'
})

const astonMartin = new Car({
    Horsepower: 630,
    Color: 'Black',
    Type: 'Luxury',
    Year: 2019,
    Model: 'DB11'
}) 

const bentley = new Car({
    Horsepower: 633,
    Color: 'Red',
    Type: 'Exotic',
    Year: 2017,
    Model: 'Continental GT' 
}) 

const ferrari = new Car({
    Horsepower: 660,
    Color: 'Purple',
    Type: 'Luxury',
    Year: 2018,
    Model: '488 GTB'
})

const koenigsegg = new Car({
    Horsepower: 1160, 
    Color: 'Gray',
    Type: 'Exotic',
    Year: 2017,
    Model: 'Agera RS'
})