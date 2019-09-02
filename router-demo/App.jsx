import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";


/**
 * BrowserRouter 路由的对象，首先需要实例化这个对象,组件
 * <BrowserRouter />
 *
 * Route 来创建路由的map {path,component} 组件
 * <Route/> 路由的slot
 *
 * Link 生成路由的导航的标签 <a>
 * <Link/>
 */
export default class App extends Component {
    constructor(props) {
        super(props);

    }

    //new VueRouter({routes:[{path,component}]})

    render() {
        return (
             <Router>
                 <Link to={"/list"}>首页</Link> | <Link to={"/detail"}>详情</Link>
                 <Rou te path={"/"} exact={true} component={NewsList}/>
                 <Route path={"/list"} component={NewsList}/>
                 <Route path={"/detail/:id"} component={NewsDetail}/>
             </Router>
        );
    }

}
