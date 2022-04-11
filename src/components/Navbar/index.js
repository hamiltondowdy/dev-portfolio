
import React from "react"
import { Navbar , Container, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "../Buttons";
import "./style.css";

function NavBar() {
return (

  <Navbar  sticky="top" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#"><h1>Hamilton Dowdy</h1></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">ooo look, buttons.</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav>
        <Buttons />
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
);
}
export default NavBar;
