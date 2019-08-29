import React,{Component} from "react"


//创建一个共享的对象
let TowContext = React.createContext()

class One extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h5>OneComponent</h5>
                <TowContext.Consumer>
                    {
                      value => <h1>one 拿到了： {value.data.title}</h1>
                    }
                </TowContext.Consumer>
            </div>
        );
    }
}

class Two extends Component {
    constructor(props) {
        super(props);
        this.state ={
            num:0
        }

    }

    render() {
        return (
            <div>
               <One/>
            </div>
        );
    }
}



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalData:{
                title:"共享的数据"
            }
        }

    }

    render() {
        return (
            <div>
                <TowContext.Provider value={{data:this.state.globalData}}>
                  <Two/>
                </TowContext.Provider>
            </div>
        );
    }

}
