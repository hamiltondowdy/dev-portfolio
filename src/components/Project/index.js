import React from "react";
import projects from "../../projects.json";
import TechListItem from "../TechListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjImg from "../../img/proj2.png";
import "./style.css"
import {  Col, Row , Container, Card, Button } from 'react-bootstrap';
import PortImg from "../../img/portimg.png";

function Project() {
    return projects.map(project => {
        // project is an even number, it will image left and text right
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (

            <Container className="container-md justify-content-center">
             <Row className="container-md justify-content-center">
     
  <h3 className="justify-content-center">Projects</h3>
    
        <Col className="col-md">
        <Card style={{ width: '18rem' , backgroundColor: '#f1f2f5'}}>
  <Card.Img variant="top" src={ProjImg} />
  <Card.Body>
    <Card.Title>Penguin Post</Card.Title>
    <Card.Text>
      A social media app
    </Card.Text>
    <Button variant="primary" className="neo-button" id="pp"><i className="fa fa-github fa-lg"> </i></Button>
  </Card.Body>
</Card>
</Col>       


<Col>
<Card style={{ width: '18rem' , backgroundColor: '#f1f2f5'}}>
  <Card.Img variant="top"  width="70%" src={PortImg} />
  <Card.Body>
    <Card.Title>Personal Portfolio</Card.Title>
    <Card.Text>
     Web Development Portfolio
    </Card.Text>
    <Button variant="primary" className="neo-button" id="pp"><i className="fa fa-github fa-lg"> </i></Button>
  </Card.Body>
</Card>
</Col>
    

  </Row>
</Container>
                
            )
            // otherwise image will be right and text left
               }
    })
}

export default Project;
