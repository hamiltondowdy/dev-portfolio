
import React from "react"
import { Navbar , Container, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "../Buttons";
import "./style.css";
import Navigation from "../Navigation";
import { NavLink } from "react-router-dom";

function NavBar() {
return (

  <Navbar  sticky="top" expand={false}>
  <Container fluid>

    <NavLink exact to="/" id="link">
    <Navbar.Brand id="brand"><h1>Hamilton Dowdy</h1></Navbar.Brand>
    </NavLink>
    
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" id="toggle" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="bb">ooo look, buttons.</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body id="aa">
        <Nav>
        <Buttons />
        <Navigation />
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
);
}
export default NavBar;
