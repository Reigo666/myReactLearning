/* 
    CountUI的container
*/
//引入CountUI的组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件与redux(Component组件)
import {connect} from 'react-redux'

import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../../redux/count_action'

/* 
    1.mapStateToProps函数返回的是一个对象:
    2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
    3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){
    return {...state}
}

/* 
    1.mapDispatchToProps函数返回的是一个对象:
    2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
    备注:key是方法名，value是方法
*/
function mapDispatchToProps(dispatch){
    return {
        increment: (data)=>dispatch(createIncrementAction(data)),
        decrement: (data)=>dispatch(createDecrementAction(data)),
        // incrementIfOdd: ()=>dispatch(),
        incrementAsync: (data,time)=>dispatch(createIncrementAsyncAction(data,time)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
