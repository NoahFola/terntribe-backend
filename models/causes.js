const mongoose = require("mongoose");
const causeSchema = new mongoose.Schema({
    Title : {
        type : String,
        required : true
    },
    Description: {
        type : String,
        required : true
    },
    imageURL: {
        type : String,
        required : true
    } 
  });

const Cause = mongoose.model("Cause", causeSchema);

module.exports = Cause