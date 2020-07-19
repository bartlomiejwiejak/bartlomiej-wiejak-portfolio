import React from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <Contact />
      <Cursor />
    </div>
  );
}

export default App;
