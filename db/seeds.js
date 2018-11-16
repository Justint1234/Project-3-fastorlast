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

const justin = new Driver({
  wins: 100,
  losses: 0,
  experience: 'undefeated',  
})

const mark = new Driver({
    wins: 56,
    losses: 13,
    experience: 'pretty good'
})

const paul = new Driver({
    wins: 97,
    losses: 3,
    experience: 'almost as good as me'
})

const dom = new Driver({
    wins: 98,
    losses: 2,
    experience: 'A threat to record'
})

const bob = new Driver({
    wins: 5,
    losses: 78,
    experience: 'pure trash, just terrible'
})

const johnny = new Driver({
    wins: 50,
    losses: 50,
    experience: 'just average'
})

Driver.remove({})
.then(() => Car.insertMany([bugatti, lamborghini, astonMartin, ferrari, bentley, koenigsegg]))
.then(() => justin.save())
.then(() => bob.save())
.then(() => johnny.save())
.then(() => paul.save())
.then(() => dom.save())
.then(() => mark.save())
.then(() => console.log("Database seeded success"))
.then(() => mongoose.connection.close())