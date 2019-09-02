/**
 * redux的使用步骤
 核心对象:store state reducer(修改状态的规则=actions+mutations+getters) middleware
 1.npm install redux react-redux -S
 2.通过redux来创建一个仓库 redux createStore(state,reducer,middleware)
 3.在组件中引用这个store,dispatch,订阅变化
 */

import {createStore,applyMiddleware} from "redux"


// 定义一个共享的状态
let initState = {
    num:100 //shared state
}

//定义修改共享的状态的规则 (vuex actions+ mutations+getters)
//action是用来监听 组件的发送过来的动作请求 {type:"自定义"}
//reducer调用是在store.dispatch({type:"ADD"})
//reducer 主要的功能 是用来修改state （mutations）
let reducer = (state,action)=>{
    let {num} = state;
   switch (action.type) { //根据动作类型，选择reducer,返回一个新的状态
       case "ADD":
           console.log("接收到dispatch:"+action.msg)
           return {num:++num} //返回一个新的状态
           break;
       case "MINUS":
           return {num:--num}
           break;
       default:
           return state;
           break;
   }
}


let logggerMiddleware = (state)=>(next)=>(action)=>{

    //中间件，必须next()
    console.log("中间件处理："+action.type)

    //side effect
    setTimeout(()=>{
        next(Object.assign(action,{msg:"hello"}))
    },3000)

}

//当reducer功能 越来越复杂的时候，可以使用中间件，来简化的功能
//reducer中需要需要处理side effect ,需要把side effect 操作放在中间件中处理
//createStore: 三个参数 reducer: 规则列表，state:共享的状态列表,middleware 扩展reducer
let store = createStore(reducer,initState,applyMiddleware(logggerMiddleware))


export default store;
