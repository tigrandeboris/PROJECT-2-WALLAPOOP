const express = require(express);
const User = require('../models/User.model');
const router = express.Router();

router.get('/', (req, res, next) => {
    User.find()
    .then(users => {
        res.render('users-list', {users})
    })
    .catch(error => console.error(error))
});

router.get('/create', (req, res, next) => {
    res.render('user-create');
});

router.post('/create', (req, res) => {
    const { userName, password, phone, email} = req.body;
    User.create({userName, password, phone, email})
    .then((user) => {
        res.redirect("/users")
    })
    .catch(error => {
        res.render('user-create', {error})
    })
})

router.get('/search', (req, res) => {
    console.log(req.query);
    res.render('users-list')
    })

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params;
    User.findOne({ _id: id})
    .then(user => {
        res.render('user-edit', {user})
    })
    .catch(error => console.error(error))
});

router.post('/:id/edit', (req, res, next) => {
    const { userName, phone, password } = req.body;
    const { id } = req.params;
    User.findOneAndUpdate({ _id:id},{userName, phone, password})
    .then(() => {
        res.redirect(`/users/${id}`);
    })
    .catch(error => console.error(error))
});

router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    User.findOneAndDelete({ _id:id })
    .then(() => {
        res.redirect(`/users`);
    })
    .catch(error => console.error(error))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    User.findOne({_id:id})
    .then(user => {
        res.render('user-details', {user})
    })
    .catch(error => console.error(error))
})

module.exports = router;