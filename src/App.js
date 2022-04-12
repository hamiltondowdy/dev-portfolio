import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import './App.css';
import { Navigation } from './components';
import Navbar from "./components/Navbar";
import Fade from './components/Fade.js';
//import FadeProps from 'fade-props';

import HashRouter from "react-router-dom";


function App() {



  return (
    <HashRouter>
      

      <Navbar />
        <Navigation />

    
     
        

    </HashRouter>
     

  );
}

export default App;