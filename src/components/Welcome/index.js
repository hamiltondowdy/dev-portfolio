import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import gsap from "gsap";
import Socials from "../Socials";

export default class WelcomePage extends Component {
  componentDidMount() {
    gsap.from(document.getElementById("left"), {
      duration: 1.6,
      rotation: 490
    });
    gsap.from(document.getElementById("h2"), {
      duration: 1.2,
      x: 490
    });
    gsap.from(document.getElementById("h1"), {
      duration: 1.2,
      x: -490
    });
    gsap.to(document.getElementById("main"), {
      delay: 5.5,
      duration: 2.2,
      y: -1100
    });
  }

  render() {
    return (
      <div id="main" className="WelcomePage">
        <div id="welc-img-cont">
          <div id="blur"></div>
        </div>
        <div id="welc-text" className="">
          <h1 id="left">
            <span> {"<"} </span>
            <span>/</span>
            <span>{" >"}</span>
          </h1>
          <h2 id="h2">Looking for a full-stack developer?</h2>
          <Socials />
        </div>
        
      </div>
    );
  }
}
const name = {
  color: "light-grey"
};