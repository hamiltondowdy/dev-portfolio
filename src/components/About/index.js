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
       
        <Container id="abtctr">
            <Navbar />
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
                        <span className="display-6">Web developer with a background in client-side product integration. Taking  experience gained from working directly with developers and program managers at Zillow to test and implement pilot programs, and leveraging my personal curiosity to continually press towards my goal of finding the most efficient way of solving problems for all stakeholders. Currently enrolled in the UT Austin Coding to gain the technical skills needed to excel both individually and collaboratively in the field of Web Development. Known as a forward-thinking problem solver, the goal with every project I engage with is to create a fluid experience that is as logical to the end user as it is to me. I am able to accomplish this goal by utilizing my skills in Javascript, Python, Bash, and AWS. </span>
                       
                        
                    </div>
                    
                    </div>
                
                 
                
            </div>
        </div>

        </Container>
      

  
   
    )
}

export default About;