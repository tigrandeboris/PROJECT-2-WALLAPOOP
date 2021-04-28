const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const saltRound = 10;
const passport = require('passport')


const ensureLogin = require('connect-ensure-login');

router.get('/signup', (req,res) => {
  res.render('auth/signup', {layout: 'layout-no-header'})
})

router.post('/signup', (req, res) => {
  const {username, password, email, phone} = req.body;

  if(!username || !password) {
    res.render('auth/signup', {errorMessage: 'Username and password are required!', layout: 'layout-no-header'});
  }

  User.findOne({username})
  .then(user => {
    if(user) {
      res.render('auth/signup', {errorMessage: 'User already exists!', layout: 'layout-no-header'})
    }
    const salt = bcrypt.genSaltSync(saltRound);
    const hashPassword = bcrypt.hashSync(password, salt);

    User.create({username, password: hashPassword, email, phone})
    .then(newUser => {
      req.login(newUser, (error)  => {
        if(error){
          console.error(error);
        }
        return res.redirect('/user')
      })
    })
    .catch((error) => console.error(error))
  })
})


router.get('/login' ,(req, res) => {
  res.render('auth/login', {layout: 'layout-no-header'});
})
router.post('/login', passport.authenticate("local", {
  successRedirect: "/user",
  failureRedirect: "/login",
  passReqToCallback: true
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
