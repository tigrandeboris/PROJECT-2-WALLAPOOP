//dotenv?
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
const DB_NAME = 'wallaPOOP';
const bodyParser = require('body-parser');

mongoose.connect(`mongodb://localhost/${DB_NAME}`)

//Middleware & setup config
app.set('views', _dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(_dirname + '/views/partials')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

const index = require('./routes/index.routes');
const users = require('./routes/user.routes');
const products = require('./routes/product.routes');
app.use('/', index);
app.use('/users.routes', users);
app.use('/products.routes', products);

app.listen(3000, () => console.log('Listening on port 3000, http://localhost:3000'));