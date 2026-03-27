import React, { useState } from 'react';

function PasswordToggle() {
  // 1. Create the state. 'isVisible' starts as false (hidden).
  const [isVisible, setIsVisible] = useState(false);

  // 2. The function to flip the state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>Quesiton 2: Password Show/Hide</h3>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {/* 3. The 'type' attribute changes based on our state */}
        <input 
          type={isVisible ? "text" : "password"} 
          placeholder="Enter password..." 
          style={{ padding: '8px' }}
        />

        {/* 4. The button text changes based on our state */}
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default PasswordToggle;