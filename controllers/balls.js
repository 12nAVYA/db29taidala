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
exports.balls_create_post = async function(req, res) {
    console.log(req.body)
    let document = new balls();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"balls_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.count = req.body.count;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Balls delete form on DELETE.
exports.balls_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Balls update form on PUT.
exports.balls_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Balls update PUT' + req.params.id);
};

// VIEWS 
// Handle a show all view 
exports.balls_view_all_Page = async function(req, res) { 
    try{ 
        theballs = await balls.find(); 
        res.render('balls', { title: 'Balls Search Results', results: theballs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 