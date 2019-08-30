import React,{Component} from "react"
import "../assets/carts.css"
import ShopHeader from "../components/commons/Header";
import ShopCartFooter from "../components/carts/Footer";
import ShopList from "../components/carts/ShopList";
import ShopCartApi from '../apis/ShopCartApi'
import ShopLoading from "../components/commons/ShopLoading";


export default class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartInfo:{}
        }
        this.shopCartCheckAll = this.shopCartCheckAll.bind(this)
    }

    /**
     * 计算总价格
     * @param cartInfo
     */
    countTotalPrice(cartInfo){
        let total = 0;
       cartInfo.shops.forEach((shop,sid)=>{
           shop.products.forEach((product,pid)=>{
               if(product.checked){
                   total +=product.price * product.num
               }
           })
       })

        return total
    }

    componentWillMount(){
        ShopCartApi.getCartInfo(data=>{
            console.log(data.totalPrice)
            data.totalPrice = this.countTotalPrice(data)
            this.setState({
                cartInfo:data
            })
        })
    }

    shopCartCheckAll(){
        console.log("check all")
        let ncartInfo = this.state.cartInfo
        let checked = ! ncartInfo.checked;
        ncartInfo.checked = checked;
        // console.log(ncartInfo)
        ncartInfo.shops.forEach((shop,sid)=>{
            shop.checked = checked
            shop.products.forEach((product,pid)=>{
                product.checked = checked
            })
        })
        ncartInfo.totalPrice = this.countTotalPrice(ncartInfo)
        //setState n 不能相同
        this.setState({
            cartInfo:ncartInfo
        })
    }

    productCheckAll(sid,pid){
        let nCartInfo = this.state.cartInfo;
        let isChecked = ! nCartInfo.shops[sid].products[pid].checked;
        console.log(isChecked)
        nCartInfo.shops[sid].products[pid].checked = isChecked

        //当所有的商品都是true 返回true ,只要有一个条件不满足 返回false
        let checked = nCartInfo.shops[sid].products.every((product,pid,arr)=>{
            return product.checked == true
        })
        nCartInfo.shops[sid].checked = checked;

        let sChk= nCartInfo.shops.every((shop,sid,arr)=>{
            return shop.checked ==true
        })

        nCartInfo.checked = sChk

        //重新计算价格
        nCartInfo.totalPrice = this.countTotalPrice(nCartInfo)

        this.setState({
            cartInfo:nCartInfo
        })

    }

    render() {
        if(!this.state.cartInfo.shops){
            return <ShopLoading/>
        }else {
            return  (
                <React.Fragment>
                    <ShopHeader/>
                    <ShopList pCheck={this.productCheckAll.bind(this)} data={this.state.cartInfo}/>
                    <ShopCartFooter sCheck={this.shopCartCheckAll} chk={this.state.cartInfo.checked} total={this.state.cartInfo.totalPrice} />
                </React.Fragment>
            )
        }
    }

}
