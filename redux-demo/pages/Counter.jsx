import React,{Component} from "react"
// import store from "../store"
import {connect} from "react-redux"

/**
 * connect 方法接收一个
木偶组件，并连接store,生成一个container组件， */

class Counter extends Component{
    render() {
        let {num,update} = this.props
        return (
            <div>
                <h1>{num}</h1>
                <button onClick={update}>+</button>
            </div>
        );
    }
}

//这种写法的缺点:组件的需要订阅store ,当store中的state发生变化的时候
//需要自己更新状态
// export default class CounterContainer extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             num:store.getState().num
//         }
//     }
//
//     update(){
//         // let {num} = this.state;
//         // this.setState({
//         //     num:++num
//         // })
//         //修改num,需要修改store中的状态
//         //组件如何需要更新store 中状态，需要组件发起请求
//         store.dispatch({type:"ADD"}) //reducer修改完成后，需要组件自己订阅的变化，来获取最新状态
//     }
//
//     componentDidMount(){
//         //订阅store的变化
//         store.subscribe(()=>{
//             console.log("store发生变化了！")
//             this.setState({
//                 num:store.getState().num
//             })
//         })
//     }
//
//     render() {
//         return (
//           <Counter num={this.state.num} update={this.update.bind(this)}/>
//         );
//     }
//
// }
//通过connect把store和Counter连接在一起，内部实现了订阅

//把store中的状态state,map到counter组件的props num上
let mapStateToProps = (state)=>{
    return {
        num:state.num
    }
}

//map 动作请求
let mapDispatchToProps = (dispatch)=>{
   return {
       update:()=>{dispatch({type:"ADD"})}
   }
}


//生成了一个连接store 一个容器组件
let CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter)


export default CounterContainer
