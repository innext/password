require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { PORT } = process.env

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/", require("./routes/index"))

app.listen(PORT, async () => {
    await require("./config/mongodb.config")()
    console.log(`::> Server listening on port ${ PORT } @ http://localhost:${ PORT }`)
})

module.exports = app
require("./createUser")