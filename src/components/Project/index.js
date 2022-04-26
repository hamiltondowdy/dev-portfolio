import React from "react";
import projects from "../../projects.json";
import Navbar from "../Navbar";
import "aframe";
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
              
       <div id="projctr">
         
         <Navbar />
        
         

    <div id="contain">
              
              <Row className="justify-content-center">

             
<h3 className="justify-content-center">PROJECTS</h3>

<Col className="col-md">
<Card style={{ width: '18rem' , backgroundColor: '#f1f2f5'}} id="project">
<Card.Img variant="top" src={ProjImg} />
<Card.Body>
<Card.Title>Penguin Post</Card.Title>
<Card.Text>
A social media app
</Card.Text>
<Button variant="primary" href="https://github.com/hamiltondowdy/penguin-post" className="neo-button" id="pp"><i className="fa fa-github fa-2x"> </i></Button>
</Card.Body>
</Card>
</Col>       


<Col>
<Card style={{ width: '18rem' , backgroundColor: '#f1f2f5' }} id="project">
<Card.Img variant="top"  width="70%" src={PortImg} />
<Card.Body>
<Card.Title>Personal Portfolio</Card.Title>
<Card.Text>
Web Development Portfolio
</Card.Text>
<Button variant="primary" className="neo-button" href="https://github.com/hamiltondowdy/dev-portfolio" id="pp"><i className="fa fa-github fa-2x"> </i></Button>
</Card.Body>
</Card>
</Col>

</Row>

        </div>

</div>     
     
         
                
             
     

    

             
            
                
            )
            // otherwise image will be right and text left
               }
    })
}

export default Project;
