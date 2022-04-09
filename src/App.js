import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div className='col-md justify-content-center margin-auto'>
      <Header />
      <Project/>
  
      <About />
      <Contact />
    </div>
  );
}

export default App;