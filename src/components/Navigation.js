import React from 'react';

import {Link, Route} from "react-router-dom";
import AppContextProvider from './../provider/AppContextProvider';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends React.Component {

  render() {
    return (
      <div className="container">

        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand ><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/"}>Irene's Portfolio</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link ><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/"}>Home</Link></Nav.Link>
              <Nav.Link ><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/resume"}>Resume</Link></Nav.Link>
              <Nav.Link ><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/"}>About Me</Link></Nav.Link>
              <Nav.Link ><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/login"}>Login</Link></Nav.Link>
              <Nav.Link ><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/Register"}>Register</Link></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

// const mapStateToProps = (state) =>{
// return{
// security:
// }
// }
export default Navigation;
