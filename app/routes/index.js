var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/hackathon', function(req, res, next) {
  res.render('hackathon');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});



module.exports = router;
