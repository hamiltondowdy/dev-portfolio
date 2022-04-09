
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Collapse } from 'react-bootstrap';
import "./style.css";

function Skills() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="skillsExample"
          className="neo-button"
          aria-expanded={open}
        >
          Skills 
        </Button>
        <Collapse in={open}>
          <div id="skillsExample">
            Node <br></br>
            Express <br></br>
            Mysql <br></br>
            MongoDB <br></br>
            React <br></br>
            HTML/css
          </div>
        </Collapse>
      </>
    );
  }
  
  export default Skills;