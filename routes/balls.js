var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('balls', { title: 'search results for balls' });
});

module.exports = router;