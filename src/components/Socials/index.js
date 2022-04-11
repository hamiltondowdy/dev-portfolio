import React from "react";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
import pdf from "../../pdf/Resume.pdf";
import { Row, Col } from "react-bootstrap"
function Socials() {
  return (
    
    
        <div>
    <div>
        <Row className="social-buttons"> 
        <button class="neo-button"><a href="mailto:hamiltondowdy@gmail.com"><i class="fa fa-envelope fa-2x"></i> </a></button> 
        <button class="neo-button"><a href="https://github.com/hamiltondowdy"><i class="fa fa-github fa-2x"></i> </a></button> 
        <button class="neo-button"><a href="https://www.linkedin.com/in/hamilton-dowdy/"><i class="fa fa-linkedin fa-2x"></i></a> </button> 
        <button class="neo-button" href={pdf}>Resume</button> 
        </Row>
        </div>
     </div>
     
  )

}

export default Socials;