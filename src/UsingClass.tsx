import React, {Component} from "react";
import myStyles from './Sample.module.css'

export class Toast extends Component{
    render(): React.ReactNode {
        return(
            <div className={myStyles.boxStyle}>
                This is a Toast Message ...
            </div>
        )
    }
}