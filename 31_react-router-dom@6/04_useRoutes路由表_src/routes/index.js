import About from "../pages/About"
import Home from "../pages/Home"
import {Navigate} from 'react-router-dom'

//路由表(Array)
export default [
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/',
        element:<Navigate to="/about" />
    }  
]
