import React, { useEffect, useRef } from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import About from './pages/About';
import useWindowSize from './hooks/useWindowSize';
import ContextProvider from './context/context';
import Switcher from './components/Switcher';
import Loader from './components/Loader';

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
    setBodyHeight();
  }, [windowSize.width, windowSize.height])
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
    <ContextProvider>
      <div className="background"></div>
      <div ref={appRef} className="view">
        <div ref={scrollRef} className="scroll">
          <Route path='/about' render={() => <About setBodyHeight={setBodyHeight} />} />
        </div>
      </div>
      <Route path='/' exact component={Switcher} />
      <Route path='/' exact render={() => <Home setBodyHeight={setBodyHeight} />} />
      <Header />
      <Contact />
      <Cursor />
      <Loader />
    </ContextProvider>
  );
}

export default App;
