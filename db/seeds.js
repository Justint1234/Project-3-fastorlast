const Car = require('../models/Car')
const Driver = require('../models/Driver')
const mongoose = require('./connections')

const bugatti = new Car({
    Horsepower: 600,
    Color: 'Blue',
    Type: 'Exotic',
    Year: 2014,
    Model: 'Hennesy Venom GT',
    Make: 'Bugatti',
    image: ('https://i.kinja-img.com/gawker-media/image/upload/s--4TtkOtA9--/c_fill,f_auto,fl_progressive,g_north,h_264,q_80,w_470/v5ylaijufkvhr6kh45db.jpg')
})

const lamborghini = new Car({
    Horsepower: 630,
    Color: 'Orange',
    Type: 'Luxury',
    Year: 2018,
    Model: 'Huracan',
    Make: 'Lamborghini',
    image: ('https://images-na.ssl-images-amazon.com/images/I/818j6IqXq%2BL._SX425_.jpg')
})

const astonMartin = new Car({
    Horsepower: 630,
    Color: 'Black',
    Type: 'Luxury',
    Year: 2019,
    Model: 'DB11',
    Make: 'Aston Martin', 
    image: ('https://dmi3w0goirzgw.cloudfront.net/gallery-images/original/260000/400/260453.jpg')
}) 

const bentley = new Car({
    Horsepower: 633,
    Color: 'Red',
    Type: 'Exotic',
    Year: 2017,
    Model: 'Continental GT',
    Make: 'Bentley',
    image: ('https://image.pbs.org/video-assets/pbs/motor-week/53185/images/Mezzanine_781.jpg.fit.980x551.jpg')
}) 

const ferrari = new Car({
    Horsepower: 660,
    Color: 'Purple',
    Type: 'Luxury',
    Year: 2018,
    Model: '488 GTB',
    Make: 'Ferrari',
    image: ('https://i.pinimg.com/originals/29/48/f1/2948f17d979494f2c0e6597f914be6a4.jpg')
})

const koenigsegg = new Car({
    Horsepower: 1160, 
    Color: 'Gray',
    Type: 'Exotic',
    Year: 2017,
    Model: 'Agera RS',
    Make: 'Koenigsegg',
    image: ('https://stmed.net/sites/default/files/koenigsegg-ccx-wallpapers-32284-9530017.jpg')
})

const justin = new Driver({
    Name: 'Justin',
  Wins: 100,
  Losses: 0,
  Experience: 'Undefeated. The greatest racer on this list. His car choice is the Koenigsegg Agera RS. This driver has been racing for 12 years',
  Location: 'Tokyo Japan'  
})

const mark = new Driver({
    Name: 'Mark',
    Wins: 56,
    Losses: 13,
    Experience: 'This driver has been racing for 8 years. Car of choice is the Bentley Continental GT. Can be a potential threat.  ',
    Location: 'Las Vegas, Nevada'
})

const paul = new Driver({
    Name: 'Paul',
    Wins: 97,
    Losses: 3,
    Experience: 'This driver is the 3rd best racer on this list. Very much a threat and difficult to beat. Has been racing for 17 years',
    Location: 'Los Angeles, California'
})

const dom = new Driver({
    Name: 'Dom',
    Wins: 98,
    Losses: 2,
    Experience: '2nd best driver on this list, this driver is really hard to beat it will take a veteran to beat him he is almost unbeatable. A challenge for only the greatest of drivers. This driver has also been racing for 17 years.',
    Location: 'Houston, Texas'
})

const bob = new Driver({
    Name: 'Bob',
    Wins: 5,
    Losses: 78,
    Experience: 'Without a doubt the worst driver on this list. This racer is for beginners and can be beaten easily. He is pure trash. Has been racing for 9 years.',
    Location: 'Rome, Italy'
})

const johnny = new Driver({
    Name: 'Johnny', 
    Wins: 50,
    Losses: 50,
    Experience: 'An average racer not really much of a challenge, unpredictable and is more suited towards beginners or intermediate racers. Has been racing for 10 years.',
    Location: 'Moscow, Russia'
})

Driver.remove({})
.then(() => Car.remove({}))
.then(() => Car.insertMany([bugatti, lamborghini, astonMartin, ferrari, bentley, koenigsegg]))
.then(() => justin.save())
.then(() => bob.save())
.then(() => johnny.save())
.then(() => paul.save())
.then(() => dom.save())
.then(() => mark.save())
.then(() => console.log("Database seeded success"))
.then(() => mongoose.connection.close())