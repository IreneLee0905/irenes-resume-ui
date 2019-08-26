import React from 'react';

import {Link, Route} from "react-router-dom";
import AppContextProvider from './../provider/AppContextProvider';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class Navigation extends React.Component {

  render() {
    return (
      <Container fluid style={{paddingLeft:0,paddingRight:0 }}>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand><Link className="nav-link" style={{color: "rgba(255,255,255,1)"}} to={"/"}>Irene's
            Portfolio</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link><Link className="nav-link" to={"/"}>Home</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to={"/resume"}>Resume</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to={"/"}>AboutMe</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to={"/login"}>Login</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to={"/Register"}>Register</Link></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

// const mapStateToProps = (state) =>{
// return{
// security:
// }
// }
export default Navigation;
