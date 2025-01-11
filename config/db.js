const mongoose = require("mongoose")
const { MONGO_URI } = require("./env.js");


const connectDB = async () => {
    return mongoose
    .connect(MONGO_URI)
    .catch((error) =>console.log(error))

}

module.exports = connectDB