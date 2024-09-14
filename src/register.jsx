import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
          <h3> <button  style={{fontWeight:"700",textAlign:"center"}}>REGISTER </button></h3> 
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name"  style={{fontWeight:"600"}}>YOUR FULL NAME</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Full Name Here"/>
            <label for="phone" style={{fontWeight:"600"}}>YOUR PHONE NUMBER</label>
 <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter Number Here"/>

            <label htmlFor="email"  style={{fontWeight:"600"}}>EMAIL</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Email Address" id="email" name="email" />
            <label htmlFor="password"  style={{fontWeight:"600"}}>PASSWORD</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" />
            <button type="submit" style={{fontWeight:"700" , backgroundColor:"darkblue",color:"white"}}>Register <ArrowForwardIcon /></button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')} style={{color:"black",fontWeight:"700"}}>Already have an account? Login here.</button>
    </div>
    )
}