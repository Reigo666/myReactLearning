/* 
    CountUI的container
*/
//引入CountUI的组件
import CountUI from '../../Components/Count'

//引入connect用于连接UI组件与redux(Component组件)
import {connect} from 'react-redux'

import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../../redux/count_action'


function mapStateToProps(state){
    return {...state}
}


// function mapDispatchToProps(dispatch){
//     return {
//         increment: (data)=>dispatch(createIncrementAction(data)),
//         decrement: (data)=>dispatch(createDecrementAction(data)),
//         // incrementIfOdd: ()=>dispatch(),
//         incrementAsync: (data,time)=>dispatch(createIncrementAsyncAction(data,time))
//     }
// }

//使用connect()()创建并暴露一个Count的容器组件
//connect两个参数均传入函数

//mapDispatchToProps可以简写为一个对象
//createIncrementAction,createDecrementAction,createIncrementAsyncAction默认被调用了dispatch分发方法
export default connect(
    state=>({...state}),
    ({
        increment: createIncrementAction,
        decrement:createDecrementAction,
        // incrementIfOdd: ()=>dispatch(),
        incrementAsync: createIncrementAsyncAction
    })
)(CountUI)
