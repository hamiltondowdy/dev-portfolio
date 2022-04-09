import React from "react";
import "./style.css";
import Socials from "../Socials"
import { Row, Col, Container } from "react-bootstrap";

function Contact() {
    return (

        <Container fluid="md">
  <Row>
    <Col>
    <div className="col-md">
    <h3>Reach Out</h3>
          
            <Socials />
            </div>
       </Col>
  </Row>
</Container>


    );
  }
  
  export default Contact;