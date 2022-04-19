
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import "./style.css";

function Skills() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('2');

  const radios = [
    { name: 'Front End', value: '1' },
    { name: 'All', value: '2' },
    { name: 'Back End', value: '3' },
  ];
  
    return (
      <>
       
     
      <ButtonGroup className="mb-4" id="skilly">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
    </>
  );
}
  
  export default Skills;