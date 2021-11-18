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
// for a specific balls.
exports.balls_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await balls.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
 res.send('NOT IMPLEMENTED: balls delete DELETE ' + req.params.id);
};

// Handle balls update form on PUT.
exports.balls_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await balls.findById( req.params.id)
 // Do updates of properties
 if(req.body.balls_type)
 toUpdate.name = req.body.name;
 if(req.body.color) toUpdate.color = req.body.color;
 if(req.body.count) toUpdate.count = req.body.count;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
// Handle balls delete on DELETE.
exports.balls_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await balls.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   // Handle a show one view with id specified by query
exports.balls_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await balls.findById( req.query.id)
    res.render('ballsdetail',
   { title: 'balls Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a balls.
// No body, no in path parameter, no query.
// Does not need to be async
exports.balls_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ballscreate', { title: 'balls Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a balls.
// query provides the id
exports.balls_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await balls.findById(req.query.id)
    res.render('ballsupdate', { title: 'balls Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.balls_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await balls.findById(req.query.id)
    res.render('ballsdelete', { title: 'balls Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };