var express = require('express');
const balls_controlers= require('../controllers/balls');  
var router = express.Router();

/* GET home page. */
router.get('/', balls_controlers.balls_view_all_Page ); 
module.exports = router; 