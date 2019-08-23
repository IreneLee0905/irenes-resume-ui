import React from 'react';

import {Link, Route} from "react-router-dom";
import AppContextProvider from './../provider/AppContextProvider';

class Navigation extends React.Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to={"/"}>Irene's Portfolio</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-right" to={"/"}>Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link text-right" to={"/resume"}>Resume</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link text-right" to={"/home"}>About Me</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link text-right" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link text-right" to={"/register"}>Register</Link>
              </li>
            </ul>

          </div>
        </nav>

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
