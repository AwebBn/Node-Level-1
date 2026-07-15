const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = new Schema({
    Username: String,
})

const Mydata = mongoose.model("Mydata",articleSchema)

module.exports = Mydata