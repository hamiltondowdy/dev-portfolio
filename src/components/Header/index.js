import React from "react";
import WelcomePage from "../Welcome";
import NavBar from "../Navbar";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headbutt from "../Headbutt";
import { Row } from "react-bootstrap";

import "./style.css"


function Header() {

    return (

<header>
  
      <NavBar />
      <Headbutt />
      <WelcomePage />

    <Row>

    </Row>

</header>

)
}

export default Header;