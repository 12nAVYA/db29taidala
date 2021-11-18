var express = require('express');
const balls_controlers= require('../controllers/balls');  
var router = express.Router();

/* GET home page. */
router.get('/', balls_controlers.balls_view_all_Page );
/* GET detail balls page */
router.get('/detail', balls_controlers.balls_view_one_Page);
/* GET create balls page */
router.get('/create', balls_controlers.balls_create_Page);

module.exports = router; 
