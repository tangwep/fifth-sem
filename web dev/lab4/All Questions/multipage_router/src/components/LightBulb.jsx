import React, { useState } from 'react';
import bulbOn from '../assets/bulb-on.png'; 
import bulbOff from '../assets/bulb-off.png';

function LightBulb() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>Question 1: Light Bulb</h3>
      <img src={isOn ? bulbOn : bulbOff} alt="bulb" style={{ width: '100px' }} />
      <br />
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default LightBulb;