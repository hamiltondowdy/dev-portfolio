import React from "react";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export default function LoadingSpinner() {
  return (
    <div id="container">
        <div id="row">
        <div id="col">
    <Spinner animation="grow" id="grow"/>
      </div>

        </div>
       

    

    </div>

      
  

  );
}