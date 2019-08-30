const path = require("path")
const express = require("express")
const router = express.Router()
const app = express()

//app 指定静态资源路径
app.use(express.static("../"))



app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})
