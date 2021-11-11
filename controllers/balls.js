var balls = require('../models/balls');
// List of all balls
exports.balls_list =  async function(req, res) {
    try{
    theballs = await balls.find();
    res.send(theballs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Balls.
exports.balls_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Balls detail: ' + req.params.id);
};
// Handle Balls create on POST.
exports.balls_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Balls create POST');
};
// Handle Balls delete form on DELETE.
exports.balls_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Balls update form on PUT.
exports.balls_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Balls update PUT' + req.params.id);
};