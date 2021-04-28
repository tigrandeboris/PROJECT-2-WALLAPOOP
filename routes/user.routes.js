const express = require('express');
const router = express.Router();
const ensureLogin = require('connect-ensure-login');
const Product = require('../models/Product.model');
const uploader = require('../configs/cloudinary.config');


router.get('/', ensureLogin.ensureLoggedIn(), (req, res) => {
    Product.find({user: req.user})
    .then((products) => {
        res.render('user/index', {products, user: req.user})
    })
    .catch((error) => console.error(error));
});

router.get('/add-product', ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render('user/add-product', {user: req.user})
})

router.post('/add-product', uploader.single('image'), ensureLogin.ensureLoggedIn(), (req, res) => {
    let product = {
        user: req.user,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    if (req.file) {
        product.image_url = req.file.path;
    }
    Product.create(product)
    .then(() => {
        res.redirect('/user');
    })
        .catch((error) => console.error(error));

})

router.get('/edit-product/:id', (req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
        res.render('user/edit-product', {product, user: req.user})
    })
})

router.post('/edit-product/:id',  uploader.single('image'), ensureLogin.ensureLoggedIn(), (req, res) => {
    let product =  {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    if (req.file) {
        product.image_url = req.file.path;
    }
    Product.findByIdAndUpdate(req.params.id, product)
    .then(() => {
        res.redirect('/user');
    })
    .catch((error) => console.error(error));

})

router.post('/delete-product/:id/', ensureLogin.ensureLoggedIn(), (req, res) => {
    console.log(req.params.id)
    Product.findByIdAndDelete(req.params.id)
    .then( () => {
        res.redirect('/user');
    })
    .catch(error => console.error(error));
});

module.exports = router;