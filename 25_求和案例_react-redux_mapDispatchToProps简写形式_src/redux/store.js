/* 
    该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import { createStore,combineReducers,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import postReducer from './post_reducer'
import thunk from 'redux-thunk'

const rootReducers=combineReducers({
    countReducer,
    postReducer
})
const store=createStore(rootReducers,applyMiddleware(thunk))
export default store
