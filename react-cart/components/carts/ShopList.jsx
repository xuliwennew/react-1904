import React,{Component} from "react"
import Shop from "./Shop";



export default class ShopList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {data,pCheck} = this.props;
        return (
            <div className="shopping">
                {
                    data.shops.map((shop,sid)=>{
                        return <Shop pCheck={pCheck} data={shop} sid={sid} key={sid}/>
                    })
                }
            </div>
        );
    }

}
