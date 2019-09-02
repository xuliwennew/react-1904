import React,{Component} from "react"


export default class NewsDetail extends Component {
    constructor(props) {
        super(props);

        this.state= {
            lists:[
                {title:"关税大棒拦不住中国发展 美企不愿迁走  就经贸谈经贸",id:1},
                {title:"对部分自美进口医疗器械加税不会增加百姓看病费"},
                {title:"9月7日至8日国庆70周年庆祝活动第一次全流程演练"}
            ],
            item:{}
        }

    }

    componentWillMount(){
        console.log(this.props.match.params)
        this.setState({
            item:this.state.lists[this.props.match.params.id]
        })
    }

    render() {
        return (
            <div>
               <h1>{this.state.item.title}</h1>
            </div>
        );
    }

}
