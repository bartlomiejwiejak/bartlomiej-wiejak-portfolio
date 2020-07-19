import React from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';
import Switcher from './components/Switcher';

function App() {

  return (
    <div className="App">
      <Switcher />
      <Header />
      <Contact />
      <Cursor />
    </div>
  );
}

export default App;
