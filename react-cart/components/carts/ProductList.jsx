import React,{Component} from "react"
import Product from "./Product";



export default class ProductList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data , sid,pCheck} = this.props
        return (
            <ul>
                {
                    data.map((product,pid)=>{
                        return <Product pCheck={pCheck} data={product} sid={sid} pid={pid} key={pid}/>
                    })
                }
            </ul>
        );
    }

}
