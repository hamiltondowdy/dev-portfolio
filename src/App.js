import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navigation } from './components';
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar />
        <Navigation />
        

      
    </div>
     

  );
}

export default App;