import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Contact, Navigation } from './components';
import Navbar from "./components/Navbar";
import { About, Project, Contact } from "./components";

import HashRouter from "react-router-dom";


function App() {



  return (
    <HashRouter>
      

      <Navbar />
        <Navigation />
        <About />
        <Project />
        <Contact />
    
     
        

    </HashRouter>
     

  );
}

export default App;