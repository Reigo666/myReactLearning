


## 十三、BrowserRouter与HashRouter的区别
        1.底层原理不一样:
                BrowserRouter使用的是H5的history API,不兼容IE9以下版本。
                HashRouter使用的是URL的哈希值。
        2.path表现形式不一样
                BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
                HashRouter的路径包含#,例如：localhost:3000/#/demo/test
        3.刷新后对路由state参数的影响
                (1).BrowserRouter没有任何影响，因为state保存在history对象中。
                (2).HashRouter刷新后会导致路由state参数的丢失。
        4.备注：HashRouter可以用于解决一些路径错误相关的问题

## 十四、withRouter的使用
        1.路由组件和普通组件的props区别
                (1).路由组件中有params,history,location三个参数。
                (2).普通组件没有。
        2.对普通组件添加路由操作，即将普通组件用withRouter包裹起来。
                class Header extends Component{}
                export default withRouter(Header)

## 十五、React-ui组件库的使用
        1.ant-design:https://ant.design/components/overview-cn/
        2.element-ui:https://elemefe.github.io/element-react/#/zh-CN/quick-start
        备注:下载包前npm先更换淘宝源
        

## 十六、redux
        1.redux是一个专门用于做状态管理的JS库(不是react插件库)
        2.它可以用在react,angular,vue等项目中,但基本与react配合使用
        3.作用:集中式管理react应用中多个组件共享的状态

## 十七、求和案例_redux精简版
        (1).去除Count组件自身的状态
        (2).src下建立:
                -redux
                        -store.js
                        -count_reducer.js
        (3).store.js:
                1).引入redux中的createStore函数，创建一个store
                2).createStore调用时要传入一个为其服务的reducer
                3).记得暴露store对象
        (4).count_reducer.js:
                1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
                2).reducer有两个作用：初始化状态，加工状态
                3).reducer被第一次调用时，是store自动触发的
                        传递的preState是undefined
                        传递的action是:@@REDUX/INIT_a.2.b.4
        (5).在index.js中监测store中状态的改变,一旦发生改变重新渲染<App/>
                备注:redux只负责管理状态,至于状态的改变驱动着页面的展示,要靠我们自己写。

## 十八、求和案例_redux完整版
        新增文件:
                1.count_action.js 专门用于创建action对象
                2.constant.js 放置容易写错的type值

## 十九、求和案例_redux异步action版
        (1).明确：延迟的动作不想交给组件自身，想交给action
        (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回（非必须）
        (3).具体编码：
                1).npm i redux-thunk,并配置在store中,const store=createStore(rootReducers,applyMiddleware(thunk))
                2).创建action的时候不再返回一般对象，而是一个函数，该函数中写异步任务
                3).异步任务有结果后，分发一个同步的action去真正操作数据
        (4).备注:异步action不是必须要写的，完全可以自己等待异步任务的结果再去分发同步action。即可以在原组件完成异步操作，无需在action中完成异步操作。
        (5).备注:createxxxAction中如果返回的是对象那么store将把action{type,data} dispatch给store;如果返回的是函数，将开启一个异步线程，完成返回函数里的内容，函数里需要再次同步dispatch(action)。

## 二十、求和案例_react-redux基本使用
        (1).明确两个概念:
                1).UI组件:不能使用任何redux的api,只负责页面的呈现、交互等。
                2)容器组件：负责和redux通信，将结果交给UI组件
        (2).如何闯一个容器组件-----靠react-redux的connect函数
                connect(mapStateToProps,mapDispatchToProps)(UI组件)
                        -mapStateToProps:映射状态，返回值是一个对象
                        -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
        (3).备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
        (4).备注2: mapDispatchToProps，也可以是一个对象

## 二十、求和案例_react-redux优化
        (1).容器组件和UI组件整合一个文件
        (2).无需自己给容器组件传递store.给<App/>包裹一个<Provider store={store}>即可
        (3).使用了react-redux后也不用再自己检测redux种状态的改变了，容器组件中connect中可以自动完成这个工作。
        (4).mapDispatchToProps也可以简单的写成一个对象
        (5).一个组件要和redux“打交道”要经过哪几步?
                1).定义好UI组件---不暴露
                2).引入connect生成一个容器组件,并暴露,写法如下:
                        connect(
                                state=>({key:value}),//映射状态(从redux中取出一些状态给UI组件)
                                {key:xxxxxAction} //映射操作状态的方法(从redux中取出一些改变状态的方法给UI组件)
                        )(UI组件)
                3).在UI组件中通过this.props.xxx读取和操作状态

## 二十一、求和案例_react-redux数据共享版
        (1).定义一个Person组件,和Count组件通过redux共享数据。
        (2).为Person组件编写：reducer、action,配置constant常量。
        (3).重点:Person的reducer和Count的Reducer要使用combineReducers进行合并,合并后的总状态是一个对象！！！
        (4).交给store的是总reducer,最后主义在组件中取出状态的时候，记得取到位
        (5).写一个container的顺序:
                1)先编写静态PersonUI界面
                2)将PersonUI使用connect和PersonContainer进行连接(store无需配置，已经使用Provider方法进行全局配置)
                3)编写personReducer对状态赋初值并定义操作状态的方法
                4)定义constant和createAction方法
                5)配置store中的combineReducers,和store中state的名称
                6)在Person中的connect将想要的状态和操作状态的方法取回使用
                