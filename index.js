require('./config.js');

const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const dbname = 'conFusion';
const url = `mongodb+srv://conFusion:${DB_PASS}@confusion.lnvgz.mongodb.net/?retryWrites=true&w=majority`
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
        .then((dish) => {
            console.log(dish);

            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});