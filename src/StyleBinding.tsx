import React from "react" ;
import './App.css';
import myStyles from './Sample.module.css'

let fontColor = {color:'blue', backgroundColor:'yellow',
                  fontSize:'20px',
                  padding:'10px',
                  fontWeight:'bold'
                };
                let fontColor1 = {color:'brown', backgroundColor:'lightgreen',
                
                  fontWeight:'bold'
                };

let ColorComponent = () => {return (
    <>
    <input type='text' value='Some value in blue' style={fontColor}/>
    <input type='text' value='CSS class style without DataBinding' className='Sample'/>
    <br/>
    <input type='text' value='CSS class style with Data Binding. This requires a file called .module.css' style={fontColor1} className={myStyles.boxStyle}/>
    </> 
   
)}

export default ColorComponent
