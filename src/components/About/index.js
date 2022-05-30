import React from "react";
import "./style.css";
import gif from "../../img/5.gif";
import Pfp from "../../img/pfp.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "../../components/Skills";

import { Container } from "react-bootstrap";
import Navbar from "../Navbar";

function About() {

    return (
       <div id="aaa">
            <Navbar />
       
        <Container id="abtctr">
            
            <div class="container" id="abt">

<div className="row">
                <div className="col-md">
                    <div className="row" id="sklrow">
                    <div className="col" id="sklcol">
                    <img className="gif" src={gif}  alt="gif" /><img className="pfp" src={Pfp} alt="Pfp" />
                    </div>
                    <div className="col-md" id="skil">
                        <h1>SKILLS</h1>
                    <Skills />
                    </div>
                    </div>
                    
              
            
                    <h3 className="display-7">ABOUT</h3>
                    <div className="aboot">
                        <span className="display-6">Web developer with 2+ years in the product integration and testing space. Experience in a
fast-paced, asynchronous working environment, coupled with a drive and curiosity to
explore web development to it's utilitarian potential. Continually pursuing development of
creative projects and freelance applications based around solid fundamentals gained from
professional education at the University of Texas at Austin.
</span>
                       
                        
                    </div>
                    
                    </div>
                
                 
                
            </div>
        </div>

        </Container>
      

        </div>
   
    )
}

export default About;