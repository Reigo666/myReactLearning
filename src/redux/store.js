/* 
    该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import { createStore,combineReducers} from 'redux'
import countReducer from './count_reducer'
import postReducer from './post_reducer'


const rootReducers=combineReducers({
    countReducer,
    postReducer
})
const store=createStore(rootReducers)
export default store
