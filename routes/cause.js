const express = require("express")
const createNewCause = require("../collectors/cause")



const causeRouter = express.Router()


causeRouter.post("/" , createNewCause)




module.exports = causeRouter

