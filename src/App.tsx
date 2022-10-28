import React from 'react';
import logo from './logo.svg';  
import './App.css';
import Bind from './Binding';
import Login from './Login'

let footer : any={marginTop: '300px', color: '#024a4a',
 fontSize: '16px', textShadow:'1[x 1px #07a39e'}
let S3 = () => {return (<img src={logo}/>)}
function App() {
  return(
    <>
    <S3/>
    <h3>HELLO REACT APP!!!</h3>
    <hr/>
    <Bind/>
    <hr/>
    
    <Login userName='Akhila' pwd='123@abc' dp='download.jpg'/>
    <Login userName='Sharu' pwd='1763@abc' dp='images (1).jpg'/>
    <Login userName='Theju' pwd='12356@abc' dp='images.jpg'/>
    <h6 style={footer}><hr/>@Copyright React</h6>
    <hr/>
    </>
  )
}

export default App;
