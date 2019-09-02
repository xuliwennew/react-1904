import React,{Component} from "react"
import {Link} from "react-router-dom"


export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            lists:[
                {title:"关税大棒拦不住中国发展 美企不愿迁走  就经贸谈经贸",id:1},
                {title:"对部分自美进口医疗器械加税不会增加百姓看病费"},
                {title:"9月7日至8日国庆70周年庆祝活动第一次全流程演练"}
            ]
        }
    }

    render() {
        return (
            <div>
               <h1>最新的新闻</h1>
                <ul>
                    {
                        this.state.lists.map((item,key)=>{
                            return <li key={key}>
                                <Link to={"/detail/"+key}>{item.title}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }

}
