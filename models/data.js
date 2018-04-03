var mongoose = require('mongoose');
var schema = mongoose.Schema;
const objectId = schema.ObjectId;

var data = new schema({
    _id: Number,
    name: String,
    date: String,
    qunatity: Number,
})
module.exports = mongoose.model("Data", data);