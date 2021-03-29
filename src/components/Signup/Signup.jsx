import { useState, state, Component } from 'react'
import React from 'react'

class Signup extends Component {

    //const [Signup, setSignup] = useState(false);

    render() {
        return (
            <div   align = "center " id="signupBox"> 
                <h1>SIGN UP</h1><br/>
                <form>
                <input type="email" id="email" placeholder="Enter Email" required /><br/><br/>
                <input type="text" id="username" placeholder="Enter Username" required /><br/><br/>
                <input type="number" id="mobilenumber" placeholder="Enter Mobile Number" required/><br/><br/>
                <input type="password" id="password" placeholder="Enter Password" required /><br/><br/>
                <input type="password" id="confirmpassword" placeholder="Confirm Password" required /><br/><br/>
                <input style={{ backgroundColor: '#99FF99' }} type="submit" id="submitButton" onClick={() => {this.setState({loggedIn:true});}} value="SIGN UP"/> <br/>
                <sub>Already a member? <a href="../Login" id="signinLink">Click here</a></sub>
                </form>
            </div>
        )
    }
    
}

export default Signup
