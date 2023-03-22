import React,{Component} from "react";
import welcome from "./Welcome.module.css"

export default class Welcome extends Component{
    render(){
        return(
            <div className={welcome.demo}>
                Welcome!
            </div>
        )
    }
}