const express = require("express")
const causeRouter = require("./routes/cause")
const { PORT } = require("./config/env.js")
const connectDB = require("./config/db.js")


const app = express()


app.use(express.json())
app.use("/causes" , causeRouter)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server started. Listening on http://localhost:${PORT}`)
})