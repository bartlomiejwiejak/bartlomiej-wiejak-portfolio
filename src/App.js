import React from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';
import Switcher from './components/Switcher';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';

function App() {

  return (
    <div className="App">
      <div className="background"></div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
      <Header />
      <Contact />
      <Switcher />
      <Cursor />
    </div>
  );
}

export default App;
