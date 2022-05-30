import React from "react";
import projects from "../../projects.json";
import Navbar from "../Navbar";
import "aframe";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjImg from "../../img/proj2.png";
import "./style.css"
import {  Col, Row , Container, Card, Button } from 'react-bootstrap';
import PortImg from "../../img/portimg.png";
import Socials from "../Socials";
import ScreenCD from "../../img/screencd2.png";

function Project() {
    return projects.map(project => {
        // project is an even number, it will image left and text right
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (
              
       <div id="projctr">
         
         <Navbar />
        
         

    <div id="contain">
              
              <Row className="justify-content-center" id="rid">

             
<h3 className="justify-content-center" id="pt">PROJECTS</h3>

<Col>
<Card id="project">
<Card.Img variant="top" id="pi" src={ProjImg} />
<Card.Body>
<Card.Title>Penguin Post</Card.Title>
<Card.Text>
A CRUD social media app
</Card.Text>
<div id="socb">
<Button href="https://github.com/hamiltondowdy/penguin-post" className="neo-button" id="socb"><i className="fa fa-github fa-2x"> </i></Button>
</div>
</Card.Body>
</Card>
</Col>       


<Col>
<Card id="project">
<Card.Img variant="top" id="pi"  src={PortImg} />
<Card.Body>
<Card.Title>Personal Portfolio</Card.Title>
<Card.Text>
Web Development Portfolio
</Card.Text>
<div id="socb">
<Button className="neo-button" id="socb" href="https://github.com/hamiltondowdy/dev-portfolio"><i className="fa fa-github fa-2x"> </i></Button>
</div>

</Card.Body>
</Card>
</Col>

<Col>
<Card id="project">
<Card.Img variant="top"  id="pi" src={ScreenCD} />
<Card.Body>
<Card.Title>Fine Art Gallery</Card.Title>
<Card.Text>
An Elegant Artist Portfolio
</Card.Text>
<div id="socb">
<Button className="neo-button" id="socb" href="https://github.com/hamiltondowdy/dev-portfolio"><i className="fa fa-github fa-2x"> </i></Button>
</div>

</Card.Body>
</Card>
</Col>

</Row>

        </div>

<Socials />
</div>     
     
         
                
             
     

    

             
            
                
            )
            // otherwise image will be right and text left
               }
    })
}

export default Project;
