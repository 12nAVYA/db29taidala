const mongoose = require("mongoose")
const ballsSchema = mongoose.Schema({
name: String,
color: String,
count: Number
})
module.exports = mongoose.model("balls",ballsSchema)