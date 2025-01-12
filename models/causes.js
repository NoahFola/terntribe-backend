const mongoose = require("mongoose");
const {Contribution, contributeSchema} = require("./contribute")
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
    },
    Contribution: {
        type: [contributeSchema], 
        required: false
    }
  });

const Cause = mongoose.model("Cause", causeSchema);

module.exports = Cause