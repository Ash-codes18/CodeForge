var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//hackathon page
router.get('/hackathon', function(req, res, next) {
  res.render('hackathon');
});

//login page
router.get('/login', function(req, res, next) {
  res.render('login');
});

//profile page
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

//organisatin page
router.get('/organisation', function(req, res, next) {
  res.render('organisation');
});

//hackathon-info page
router.get('/hackathon-info', function(req, res, next) {
  res.render('hackathon-info');
});

//about page
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
