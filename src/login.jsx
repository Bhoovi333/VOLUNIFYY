import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2><button style={{fontWeight:"700",textAlign:"center"}}>SIGN IN</button></h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" style={{fontWeight:"700"}}>E-MAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Email Address" id="email" name="email" />
                <label htmlFor="password" style={{fontWeight:"700"}}>PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" />
                <button type="submit" style={{fontWeight:"700" , backgroundColor:"darkblue",color:"white"}}>Log In <ArrowForwardIcon /></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}  style={{color:"black"}}>Don't have an account? Register here.</button>
        </div>
    )
}