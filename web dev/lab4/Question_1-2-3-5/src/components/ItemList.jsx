import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState(["Task 1", "Task 2"]);
  const [inputValue, setInputValue] = useState(""); // Holds what you type

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add the typed text
      setInputValue(""); // Clear the box after adding
    }
  };

  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ width: '100%' }}>
      <h3 style={{ color: '#2c3e50' }}>Question 3: Dynamic List</h3>
      
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          style={inputStyle}
        />
        <button onClick={addItem} style={addBtnStyle}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={liStyle}>
            {item}
            <button onClick={() => deleteItem(index)} style={delBtnStyle}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Minimal Modern Styles
const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 };
const addBtnStyle = { padding: '8px 15px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const delBtnStyle = { padding: '5px 10px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' };
const liStyle = { background: '#f9f9f9', margin: '5px 0', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee' };

export default ItemList;