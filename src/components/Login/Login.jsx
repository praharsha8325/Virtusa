import React from 'react';
const Login = () => {
    
    return (
        <div align ="center" id="loginBox">
            <h1>Login</h1>
            <form>
            <input type="email" id="email" placeholder="Email" required></input>
           <br/><br/>
           <input type="password" id="password" placeholder="Password" required></input>
           <br/><br/>
            <button style={{backgroundColor:"#99ff99"}} id="submitButton" >Login</button>
            <br/><br/>
            <sub>New User?<a href="../Signup" id="signupLink">Click here</a></sub>
            </form>
        </div>
    )
}

export default Login
