const express = require(express);
const product = require('../models/Product.model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Product.find()
    .then(products => {
        res.render('products-list', {products})
    })
    .catch(error => console.error(error))
});

router.get('/create', (req, res, next) => {
    res.render('product-create');
});

router.post('/create', (req, res) => {
    const { user, name, description, image_url, price } = req.body;
    Product.create({ user, name, description, image_url, price })
    .then((product) => {
        res.redirect("/products")
    })
    .catch(error => {
        res.render('product-create', {error})
    })
})

router.get('/search', (req, res) => {
    console.log(req.query);
    res.render('products-list')
    })

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params;
    Product.findOne({ _id: id})
    .then(product => {
        res.render('product-edit', {product})
    })
    .catch(error => console.error(error))
});

router.post('/:id/edit', (req, res, next) => {
    const {  user, name, description, image_url, price  } = req.body;
    const { id } = req.params;
    Product.findOneAndUpdate({ _id:id},{ user, name, description, image_url, price })
    .then(() => {
        res.redirect(`/products/${id}`);
    })
    .catch(error => console.error(error))
});

router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    Product.findOneAndDelete({ _id:id })
    .then(() => {
        res.redirect(`/products`);
    })
    .catch(error => console.error(error))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Product.findOne({_id:id})
    .then(product => {
        res.render('product-details', {product})
    })
    .catch(error => console.error(error))
})

module.exports = router;