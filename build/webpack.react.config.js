/*
   entry: 打包入口
   output: 打包后的代码
   rules: vue-loader
 */

 const path = require("path")


 module.exports = {
     mode:"development",
     entry:[
         "babel-polyfill",
         path.resolve(__dirname,"../","redux-demo/main.js")
     ],
     output:{
         filename:"app.bundle.js",
         path:path.resolve(__dirname,"../","redux-demo")
     },
     resolve:{
         extensions:[".css",".js",".jsx"]
     },
     module:{
         rules:[
             {
                 test:/\.js$/,
                 loader:"babel-loader",
                 query: {
                     "presets": ["@babel/preset-env","@babel/preset-react"],
                     "plugins":["@babel/plugin-transform-react-jsx"]
                 }
             },
             {
                 test:/\.jsx$/,
                 loader:"babel-loader",
                 query: {
                     "presets": ["@babel/preset-env","@babel/preset-react"],
                     "plugins":["@babel/plugin-transform-react-jsx"]
                 }
             },
             {
                 test:/\.css$/,
                 loader:"style-loader!css-loader"
             },
             {
                 test:/\.(png|jpg|gif)$/,
                 loader:"url-loader"
             }
         ]
     }
 }
