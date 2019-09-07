
/**
 *  1. 安装 npm install vue-server-renderer -S
 *  2. 创建一个Vue实现 -》server-renderer -> dom string
 *  3. 把viewmodel生成 server dom string
 *  4. 使用nodejs express -> dom stirng -> res.end()
 **/
const express = require('express');
const router = express.Router()
const server = express()
const Vue = require("vue")
const renderer = require('vue-server-renderer').createRenderer()

//创建viewmodel
let app = new Vue({
        data:{
          msg:"server side render vue ====="
        },
        template:`<div>
         <h1>{{msg}}</h1>
      </div>
     `
});


router.get("/",(req,res)=>{
    renderer.renderToString(app,(err,html)=>{
        res.end(html)
    })
})

server.use("/",router)


server.listen(3000,()=>{
        console.log("vue server is running!")
})



