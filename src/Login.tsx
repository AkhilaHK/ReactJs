import React from "react";
import './App.css';

let cssAlignLeft = {marginLeft:'5px'}
export default function Login(props:any){

    return(
        <div className="login">
            <img src={props.dp} style={cssAlignLeft}/>
            <hr/>
            <strong>UserName - {props.userName}</strong>
            <br/>
            <strong>Password - {props.pwd}</strong>
        </div>
    )
}