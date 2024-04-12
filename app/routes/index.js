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

//login
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

//organisatin page
router.get('/organisations', function(req, res, next) {
  res.render('organisation');
});
module.exports = router;
