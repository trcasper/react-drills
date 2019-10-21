import React, {Component} from 'react';
class Login extends Component {
    constructor(){
        super()
        this.state = {
            password: '',
            username: ''
            
        }
    
    }
    
    handlePasswordChange(password){
        this.setState({ password: password })
    }
    handleUsernameChange(name){
        this.setState({ username: name })
        
    }
    handleLogin(prop){
        return alert(`Username: ${this.state.username} Password: ${this.state.password}`)
        
    }
    render(){
    return(
        <div className="loginContainer">
            <h1>Password</h1>
            <input className="inputPassword" onChange={ (event) => this.handlePasswordChange(event.target.value)}/>

            <h1>Username</h1>
            <input className="inputUsername" onChange={ (event) => this.handleUsernameChange(event.target.value)}/>
            <button onClick={ () => this.handleLogin()}>Enter</button>

        </div>
        )
    }
}
export default Login;

            