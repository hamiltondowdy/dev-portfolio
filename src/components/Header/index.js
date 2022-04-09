import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar";
import "./style.css"
function Header() {

    return (

<header>
  

  <Navbar />

 
  <div class="p-5 text-center bg-light" id="hero">
    <h1 class="mb-3" id="hero-text">Full Stack Web Developer</h1>
    <button className="neo-button">More</button>
  </div>


</header>

)
}

export default Header;