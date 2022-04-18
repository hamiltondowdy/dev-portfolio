import React from "react";
import Resume from "./pdf/Resume.pdf";

import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import {HashRouter, Routes, Route } from 'react-router-dom';
import {
  About,
 // Buttons,
  Contact,
 // Headbutt,
  Header,
  Navbar,
  Project,
  Navigation,
//  Resume,
//  Skills,
//  Socials,
//  Welcome
} from "./components";


ReactDOM.render(


<HashRouter basename={process.env.PUBLIC_URL}>

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} >
      </Route>
    </Routes>

  
  </HashRouter>

  ,

  document.getElementById("root")
);
