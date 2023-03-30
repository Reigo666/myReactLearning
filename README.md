


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

## 十五、ui的使用
        1.ant-design:https://ant.design/components/overview-cn/
        2.element-ui:https://elemefe.github.io/element-react/#/zh-CN/quick-start
        备注:下载包前npm先更换淘宝源
