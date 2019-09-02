redux vuex 

vuex == redux 

状态管理容器
vue vuex 

1.vuex是什么? 基于redux思想，他是redux的一个升级版本
2.Vuex解决什么问题？组件间的状态共享
3.Vuex核心对象
store 
state : 仓库管理的对象，共享的对象
mutations: 修改状态的mutation
actions: action 接收组件发送过来的动作请求，提交到mutations
getters: 获取最新的状态 mapGetters
 computed 
module:模块化管理,
4.Vuex处理流程
component->dispatch("xx")->store/actions->commit("xx")->store/mutations->store/getters(mapGetters+computed)

Vuex开发要点:
区分组件中哪些是公共的或者共享的状态

vuex - redux 
vuex 管理完善饭店
redux 路边的小摊 

redux 是一个通用的js状态管理
redux可以在任何的js框架中使用 
vue react angular 

react-redux 

redux = reduce flux 

vuex 的使用步骤
1.npm install vuex -S 
2.Vue.use(Vuex)
3.创建一个项目级的仓库(new Vuex.Store({})),配置store的管理规则(state,getters,mutations,actions,module)
4.在main.js,注册store到vue的实例上: $store
5.mapGetters,mapActions(dispatch) 

redux的使用步骤
核心对象:store state reducer(修改状态的规则=actions+mutations+getters) middleware 
1.npm install redux react-redux -S
2.通过redux来创建一个仓库 redux createStore(state,reducer,middleware)
3.在组件中引用这个store,dispatch,订阅变化

react 设计模式 
react all in js data logic css view 容器模式(view-logic)

Hello ->HelloContainer 

