/* 
    该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import { createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'


// 引入rootReducers
import rootReducers from './index'

const store=createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)))
export default store
