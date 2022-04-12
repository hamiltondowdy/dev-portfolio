import React, { useEffect, useState} from "react";
import Loading from '../Loading';
import NavBar from "../Navbar";
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Headbutt from "../Headbutt";
import { Spinner } from "react-bootstrap";
import "aframe";
import "./style.css"


function Header() {
  const [loading, setLoading] = useState(true);
      
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])
    
  // If page is in loading state, display 
  // loading message. Modify it as per your 
  // requirement.
  if (loading) {
      return <Loading />
  }
    
  // If page is not in loading state, display page.
  else {

    return (

<header id="head">

  
      <NavBar />
     

      <a-scene>
      <a-sky src="https://i.imgur.com/tqm3Zqy.jpg" rotation="0 -58.7 30"></a-sky>
    </a-scene>

     
      <Headbutt />




</header>

)
}
}

export default Header;