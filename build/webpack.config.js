/*
   entry: 打包入口
   output: 打包后的代码
   rules: vue-loader
 */

 const path = require("path")
 const {VueLoaderPlugin} = require("vue-loader")

 module.exports = {
     mode:"development",
     entry:{
         app:path.resolve(__dirname,"../","vue-jsx/main.js")
     },
     output:{
         filename:"[name].bundle.js",
         path:path.resolve(__dirname,"../","vue-jsx")
     },
     resolve:{
         extensions:[".css",".js",".vue"]
     },
     module:{
         rules:[
             {
                 test:/\.vue$/,
                 loader:"vue-loader"
             },
             {
                 test:/\.js$/,
                 loader:"babel-loader",
                 query: {
                     "presets": ["@vue/babel-preset-jsx"]
                 }
             }
         ]
     },
     plugins:[
         new VueLoaderPlugin()
     ]
 }
