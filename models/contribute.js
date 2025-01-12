const mongoose = require("mongoose");
const contributeSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Email: {
        type : String,
        required : true
    },
    Amount: {
        type : String,
        required : true
    } 
  });


module.exports = {contributeSchema}