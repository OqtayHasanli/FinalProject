const express = require("express")
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const Userroutes=require("./src/routes/UserRoute")
const Productsroutes=require("./src/routes/productroute")
const Adminroute=require("./src/routes/adminRoute")

require("./src/config/config")
const cors = require('cors')
const PORT=process.env.Port


app.use(cors())

app.use(bodyParser.json())
app.use("/",Userroutes)
app.use("/",Productsroutes)
app.use("/",Adminroute)

app.listen(PORT, () => {
	console.log("Server has started!")
})