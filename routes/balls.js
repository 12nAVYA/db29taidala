var express = require('express');
const balls_controlers= require('../controllers/balls');  
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', balls_controlers.balls_view_all_Page );
/* GET detail balls page */
router.get('/detail', balls_controlers.balls_view_one_Page);
/* GET create balls page */
router.get('/create', secured,balls_controlers.balls_create_Page);
/* GET create update page */
router.get('/update', secured,balls_controlers.balls_update_Page);
/* GET create costume page */
router.get('/delete', secured,balls_controlers.balls_delete_Page);
module.exports = router; 

