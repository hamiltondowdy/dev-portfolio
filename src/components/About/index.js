import React from "react";
import "./style.css";
import gif from "../../img/5.gif";
import Pfp from "../../img/pfp.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "../../components/Skills";
import Resume from "../Resume"

function About() {

    return (
            <div className="row">
                <div className="hero-wrap">
                    <div className="boxy">
                    <img className="gif" src={gif}  alt="gif" /><img className="pfp" src={Pfp} alt="Pfp" />
                    </div>
                   
              
               </div>
                <div className="col-md justify-content">
                    <h3 className="display-7">ABOUT</h3>
                    <div className="aboot">
                        <span className="display-7">Web developer with a background in client-side product integration. Taking  experience gained from working directly with developers and program managers at Zillow to test and implement pilot programs, and leveraging my personal curiosity to continually press towards my goal of finding the most efficient way of solving problems for all stakeholders. Currently enrolled in the UT Austin Coding to gain the technical skills needed to excel both individually and collaboratively in the field of Web Development. Known as a forward-thinking problem solver, the goal with every project I engage with is to create a fluid experience that is as logical to the end user as it is to me. I am able to accomplish this goal by utilizing my skills in Javascript, Python, Bash, and AWS. </span>
                       
                        
                    </div>
                    </div>
                    <div className="pad">
                    <Skills />
                    </div>
                 
                
            </div>
  
   
    )
}

export default About;