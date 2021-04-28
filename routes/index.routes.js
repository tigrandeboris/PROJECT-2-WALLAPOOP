const express = require('express');
const router = express.Router();
const Product = require('../models/Product.model');
const ensureLogin = require('connect-ensure-login');

/* GET home page */
router.get('/', (req, res) => {
    const search = req.query.search;
    let filter = {};
    if (search) {
        filter = {name: {$regex: '.*' + search + '.*'}}
    }
    Product.find(filter).limit(6)
    .populate('user')
    .then((products) => {
        res.render('index', {products, user: req.user})
    })
        .catch((error) => console.error(error));
});

router.get('/product/:id', (req, res) => {
    Product.findById(req.params.id)
    .populate('user')
    .then((product) => {
        res.render('product', {product, user: req.user})
    })
    .catch((error) => console.error(error));
});

module.exports = router;
