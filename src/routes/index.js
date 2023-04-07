import { element } from "prop-types"
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Home/Message"
import News from "../pages/Home/News"
import Detail from "../pages/Home/Message/Detail"
import {Navigate} from 'react-router-dom'

//路由表(Array)
export default [
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element:<Message/>,
                children:[
                    {
                        path:'detail',
                        element:<Detail/>
                    }
                ]
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to="/about" />
    }  
]
