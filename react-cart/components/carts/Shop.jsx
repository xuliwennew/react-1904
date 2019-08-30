import React,{Component} from "react"
import ProductList from "./ProductList";



export default class Shop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {data,sid,pCheck} = this.props

        return (
            <div className="shop-group-item">
                <div className="shop-name">
                    <input type="checkbox"
                           className={[data.checked?"checked":"unchecked"]} defaultValue={data.checked} defaultChecked={data.checked} />
                        <h4>
                            <a href="#">{data.shopName}</a>
                        </h4>
                        <div className="coupons">
                            <span>领券</span>
                            <em>|</em>
                            <span>编辑</span>
                        </div>
                </div>
                <ProductList pCheck={pCheck} data={data.products} sid={sid}/>
                <div className="shopPrice">
                    本店总计：
                    ￥<span className="shop-total-amount ShopTotal">16000</span>
                </div>


            </div>
        );
    }

}
