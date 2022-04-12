import React from "react";



import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  <Router>

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />}>
      </Route>
    </Routes>

  
  </Router>,

  document.getElementById("root")
);
