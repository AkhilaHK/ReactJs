import React, {Component} from "react";

export class Login extends Component<{},{username:string, password:string}>{


    constructor(props:any){
        super(props)
        this.state = {username:'', password:''}
        
    }

    render(): React.ReactNode {
        return(
            <div>
                Enter Username: <input type='text' placeholder="Enter username" onChange={(e)=>this.setUserName(e)}/>
                <br/>
                Enter Password: <input type='password' placeholder="Enter password" onChange={(e)=>this.setPassword(e)}/>
                <br/>
                <button onClick={(e)=>this.VerifyLogin(e)} onMouseEnter={(e)=>this.ChangeBackground(e)} onMouseOut={(e)=>this.ResetBackground(e)}>Login</button>
                {this.toast}
            </div>
        )
    }
    public ChangeBackground(e:any){
        console.log(e.target.style.backgroundColor='lightpink')
    
    }
    public ResetBackground(e:any){
        console.log(e.target.style.backgroundColor='yellowgreen')
    
    }

    
public toast:any
    public VerifyLogin(e:any){
       e.preventDefault();
        if(this.state.username == 'admin' && this.state.password == 'nimda'){
            e.target.style = 'background-color:yellow';
            this.toast = <OkToast/>
        }
        else{
            this.toast = <ErrorToast/>
        }
        this.forceUpdate()
    }

    public setUserName(e:any){
        console.log(e.target.value)
        this.setState({username:e.target.value})
    }

    public setPassword(e:any){
        this.setState({password:e.target.value})
    }
}

export function OkToast(){
    return(
        <div className="success">Login Successful</div>
    )
}

export function ErrorToast(){
    return(
        <div className="error">Login Failed</div>
    )
}