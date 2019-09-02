import React,{Component} from "react"
import CounterContainer from "./pages/Counter";
import store from "./store"
import {Provider} from "react-redux"


export default class App extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Provider store={store}>
               <CounterContainer/>
            </Provider>
        );
    }

}
