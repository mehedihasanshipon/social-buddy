import React from "react";
import {Navbar,Nav} from 'react-bootstrap'
import { Link,NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className = "mb-5">
      <Navbar bg="light" expand="lg">
        <div className="container">
        <NavLink className ="navbar-brand" to="/">Social-buddy</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link active" to="/home">Home</Link>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
