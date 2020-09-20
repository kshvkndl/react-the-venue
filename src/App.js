import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header'


function App() {
  return (
    <div className="App" style={{
      height: '1500px', backgroundColor: 'blue', padding: '10px 0px'
    }}>
      <Header />
    </div>
  );
}

export default App;
