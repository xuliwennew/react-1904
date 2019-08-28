import React,{Component} from "react"
import Hello from "./Hello";
import World from "./World"


export default class App extends Component{
    render(){
        return <div>
            <h1>hello component</h1>
            <Hello/>
            <World/>
        </div>
    }
}
