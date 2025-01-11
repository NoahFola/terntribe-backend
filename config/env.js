const { configDotenv } = require("dotenv") 

configDotenv()

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const API_VERSION = 1

module.exports = { PORT, MONGO_URI, API_VERSION }