import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink } from "react-router-dom"
import "./app.css"
import logo from "../src/images/image.png"
function ColorSchemesExample() {
  return (
    <>
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'></div>
      </div>
    </div>
      <Navbar bg="light" data-bs-theme="light">
        <Container >
        <img src={logo} height="90px" width="220px"></img>
          <Nav>
          <NavLink to="/"  style={{color:"black",fontFamily:"cursive",margin:"5px",textDecoration:"none" }}>Home</NavLink>
          <NavLink to="/about"  style={{color:"black",fontFamily:"cursive",margin:"5px",textDecoration:"none"}}>About</NavLink>
          <NavLink to="/enroll"  style={{color:"black",fontFamily:"cursive",margin:"5px",textDecoration:"none"}}>Enroll</NavLink>
          <NavLink to="/contact" style={{color:"black",fontFamily:"cursive",margin:"5px",textDecoration:"none"}}>Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default ColorSchemesExample;