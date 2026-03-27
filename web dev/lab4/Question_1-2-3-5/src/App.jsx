import React from 'react';
import LightBulb from './components/LightBulb';
import PasswordToggle from './components/PasswordToggle';
import ItemList from './components/ItemList';
import Counter from './components/Counter';

function App() {
  return (
    <div style={containerStyle}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ color: '#7f8c8d' }}>Lab-4 </h3>
      </header>

      <div style={verticalListStyle}>
        <section style={{ ...cardStyle}}>
          <LightBulb />
        </section>

        
        <section style={{ ...cardStyle }}>
          <PasswordToggle />
        </section>

        
        <section style={{ ...cardStyle}}>
          <ItemList />
        </section>

        
        <section style={{ ...cardStyle}}>
          <Counter />
        </section>
      </div>
    </div>
  );
}

// STYLES
const containerStyle = {
  backgroundColor: '#f0f2f5',
  minHeight: '100vh',
  padding: '50px 20px',
  fontFamily: 'sans-serif'
};

const verticalListStyle = {
  display: 'flex',
  flexDirection: 'column', // This makes it vertical
  gap: '30px',
  maxWidth: '700px',
  margin: '0 auto' // Centers the whole list
};

const cardStyle = {
  background: 'white',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export default App;