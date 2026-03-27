import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LightBulb from './components/LightBulb';
import PasswordToggle from './components/PasswordToggle';
import ItemList from './components/ItemList';
import Counter from './components/Counter';

function App() {
  return (
    <BrowserRouter>
      <div style={layoutStyle}>
        <header style={headerStyle}>
          <h1 style={text}>Lab 4</h1>
          <p style={text}>Question-4: Multipage using Router</p>
        </header>

        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Q1: Light Bulb</Link>
          <Link to="/q2" style={linkStyle}>Q2: Password</Link>
          <Link to="/q3" style={linkStyle}>Q3: Item List</Link>
          <Link to="/q5" style={linkStyle}>Q5: Counter</Link>
        </nav>

        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<LightBulb />} />
            <Route path="/q2" element={<PasswordToggle />} />
            <Route path="/q3" element={<ItemList />} />
            <Route path="/q5" element={<Counter />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}


const layoutStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  padding: '20px'
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  color: '#2c3e50'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '40px',
  flexWrap: 'wrap'
};

const linkStyle = {
  textDecoration: 'none',
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  borderRadius: '25px',
  fontWeight: 'bold',
  transition: '0.3s'
};

const mainContentStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
  maxWidth: '600px',
  margin: '0 auto',
  minHeight: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const text={
  color: 'black'
}

export default App;