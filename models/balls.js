const mongoose = require("mongoose")
const ballsSchema = mongoose.Schema({
name: String,
color: String,
count: {type:Number,min:4,max:100}
})
module.exports = mongoose.model("balls",ballsSchema)