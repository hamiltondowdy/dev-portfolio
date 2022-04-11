import React from "react";
import pdf from "../../pdf/Resume.pdf";
import { Button } from 'react-bootstrap';
import "./style.css"
export default function App() {
  return (
    <div>
        <Button className="neo-button" id="res" href={pdf}>Resume</Button> 
    </div>
  );
}