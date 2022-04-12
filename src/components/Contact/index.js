import React from "react";
import "./style.css";
import Socials from "../Socials"
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";

function Contact() {
    return (
        <div class="container" id="contact">
          <Navbar />
<Container id="abt">
  <Row>
    <Col>
    <div className="col-md">
    <h3>CONTACT</h3>
          
            <Socials />
            </div>
       </Col>
  </Row>
</Container>
        </div>
       


    );
  }
  
  export default Contact;