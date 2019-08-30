import React,{Component} from "react"
import ShopCart from "./views/ShopCart"



export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
               <ShopCart/>
            </div>
        );
    }

}
