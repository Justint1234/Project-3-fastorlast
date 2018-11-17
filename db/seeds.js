const Car = require('../models/Car')
const Driver = require('../models/Driver')
const mongoose = require('./connections')

const bugatti = new Car({
    Horsepower: 600,
    Colors: 'Blue',
    Type: 'Exotic',
    Year: 2014,
    Model: 'Hennesy Venom GT',
    image: ('https://i.kinja-img.com/gawker-media/image/upload/s--4TtkOtA9--/c_fill,f_auto,fl_progressive,g_north,h_264,q_80,w_470/v5ylaijufkvhr6kh45db.jpg')
})

const lamborghini = new Car({
    Horsepower: 630,
    Color: 'Orange',
    Type: 'Luxury',
    Year: 2018,
    Model: 'Huracan',
    image: ('https://images-na.ssl-images-amazon.com/images/I/818j6IqXq%2BL._SX425_.jpg')
})

const astonMartin = new Car({
    Horsepower: 630,
    Color: 'Black',
    Type: 'Luxury',
    Year: 2019,
    Model: 'DB11', 
    image: ('https://dmi3w0goirzgw.cloudfront.net/gallery-images/original/260000/400/260453.jpg')
}) 

const bentley = new Car({
    Horsepower: 633,
    Color: 'Red',
    Type: 'Exotic',
    Year: 2017,
    Model: 'Continental GT',
    image: ('https://image.pbs.org/video-assets/pbs/motor-week/53185/images/Mezzanine_781.jpg.fit.980x551.jpg')
}) 

const ferrari = new Car({
    Horsepower: 660,
    Color: 'Purple',
    Type: 'Luxury',
    Year: 2018,
    Model: '488 GTB',
    image: ('https://i.pinimg.com/originals/29/48/f1/2948f17d979494f2c0e6597f914be6a4.jpg')
})

const koenigsegg = new Car({
    Horsepower: 1160, 
    Color: 'Gray',
    Type: 'Exotic',
    Year: 2017,
    Model: 'Agera RS',
    image: ('https://stmed.net/sites/default/files/koenigsegg-ccx-wallpapers-32284-9530017.jpg')
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