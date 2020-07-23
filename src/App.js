import React, { useEffect, useRef } from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';
import Switcher from './components/Switcher';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';

function App() {

  const scrollRef = useRef();
  const appRef = useRef();

  const skewConfig = {
    ease: .05,
    current: 0,
    previous: 0,
    rounded: 0
  }

  useEffect(() => {
    document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`
  })



  useEffect(() => {
    const skewScrolling = () => {
      skewConfig.current = window.scrollY;
      skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
      skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

      const difference = skewConfig.current - skewConfig.rounded;
      const acceleration = difference / window.innerWidth;
      const velocity = +acceleration;
      const skew = velocity * 7.5

      scrollRef.current.style.transform = `translateY(${-skewConfig.rounded}px) skewY(${skew}deg)`;
      requestAnimationFrame(() => skewScrolling());
    }
    requestAnimationFrame(() => skewScrolling());

  }, [skewConfig])

  return (
    <>
      <div className="background"></div>
      <Switcher />
      <Cursor />
      <div ref={appRef} className="App">
        <div ref={scrollRef} className="scroll">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </div>
      <Header />
      <Contact />
    </>
  );
}

export default App;
