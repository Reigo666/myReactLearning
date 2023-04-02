/* 
    该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import { createStore,combineReducers,applyMiddleware} from 'redux'
import countReducer from './reducers/count_reducer'
import postReducer from './reducers/post_reducer'
import personReducer from './reducers/person_reducer'
import thunk from 'redux-thunk'

const rootReducers=combineReducers({
    count:countReducer,
    post:postReducer,
    persons:personReducer
})
const store=createStore(rootReducers,applyMiddleware(thunk))
export default store
