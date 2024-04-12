var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//organisatin page
router.get('/organisations', function(req, res, next) {
  res.render('organisation');
});
module.exports = router;
