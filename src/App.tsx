import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorComponent from './StyleBinding';
import { Toast } from './UsingClass';
import Movie from './Movie';
import { Login, OkToast,ErrorToast } from './LoginWithStates';
import { WithHttp } from './simpleHttp';
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink,useLocation,useParams} from 'react-router-dom'


let C1 = () => {return (<h2>A sub-heading created in component c1</h2>)}
let user:any = {username:'admin', pwd:'nimda'}
let C2=()=> {return (<p>Username: {user.username} | Password: {user.pwd}</p>)}
let C3 = () => {return (<img src={logo}/>)}
let C4 = () => {return(
  <div>
    <input type="text" value={user.username}/>
    <br/>
    <input type="password" value={user.pwd}/>
    <br/>
    <button>Login</button>
  </div>
)

}
// since the function returns html, hence it can be accessed as <App/> inside index.tsx
function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavLink to='/login'>Login</NavLink>
        <span> | </span>
        <NavLink to='/movie'>Movies</NavLink>
        <span> | </span>
        <NavLink to='/http'>Web Api Communication</NavLink>
        <span> | </span>
      </div>
      {/* to add configs use the <Routes></Routes> */}

      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movie' element={<><Movie movieName='Kanthara' rating='5' dp='Kanthara.jpg'/>
                                      <Movie movieName='Bramhastra' rating='4' dp='rr.jpg'/>
                                       <Movie movieName='KGF' rating='4.5' dp='KGF.jpg'/></>}
    />
       <Route path='/http' element={<WithHttp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
  
//only one default export per file
export default App;
