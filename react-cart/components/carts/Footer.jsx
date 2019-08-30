import React,{Component} from "react"



export default class ShopCartFooter extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { chk,total,sCheck} = this.props
        return (
            <div className="payment-bar">
                <div className="all-checkbox">
                    <input type="checkbox" onClick={sCheck} defaultValue={chk} defaultChecked={chk} className={[chk?"checked":"unchecked"]}/>
                    全选
                </div>
                <div className="shop-total">
                    <strong>
                        总价：
                        <i id="AllTotal" className="total">{total}</i>
                    </strong>
                    <span>减免：100</span>
                </div>
                <a href="#" className="settlement">结算</a>
            </div>
        );
    }

}
