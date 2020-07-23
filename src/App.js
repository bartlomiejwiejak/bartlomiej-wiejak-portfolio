import React, { useEffect, useRef } from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';
import Switcher from './components/Switcher';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import useWindowSize from './hooks/useWindowSize';

function App() {

  const scrollRef = useRef();
  const appRef = useRef();
  const windowSize = useWindowSize();

  const skewConfig = {
    ease: .07,
    current: 0,
    previous: 0,
    rounded: 0
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBodyHeight();
    }, 1000)
    setBodyHeight();
  }, [windowSize.width])
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
      }px`;
  };

  const skewScrolling = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollRef.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

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
