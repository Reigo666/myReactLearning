
import {ADD_PERSON} from '../constant'
const initState=[{id:'001',name:'张三',age:18}]

export default function personReducer(preState=initState,action){
    const {data,type}=action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}