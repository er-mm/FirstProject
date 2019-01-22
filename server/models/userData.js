const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    fname : String,
    lname : String,
    email : String
});

module.exports = mongoose.model('Details', userSchema);