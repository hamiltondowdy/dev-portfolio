
import React from  "react";
import Socials from "../Socials";
import Skills from "../Skills";
import Resume from "../Resume";
import { Row, Col } from "react-bootstrap";

function Buttons() {
    return (
    


            <Row>
               <Col>
               <Socials />
               </Col>
        <Col>
        <Skills />
        </Col>   
           
    <Col>
        <Resume />
        </Col>
     </Row>

      
       

        
      
       
  
     
        
       
    )
}

export default Buttons;