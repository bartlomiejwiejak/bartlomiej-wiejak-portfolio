import React, { useEffect, useRef, Suspense } from 'react';
import Header from './layout/Header';
import Cursor from './components/Cursor';
import Contact from './components/Contact';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import About from './pages/About';
import useWindowSize from './hooks/useWindowSize';
import ContextProvider from './context/context';
import Loader from './components/Loader';
import Work from './pages/Work';
import { Redirect, Switch } from 'react-router-dom';
import WorkPagination from './components/WorkPagination';
import Light from './components/Light';
import Circle from './components/Circle';

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
    <Suspense fallback={null}>
      <ContextProvider>
        <div className="background"></div>
        <div ref={appRef} className="view">
          <div ref={scrollRef} className="scroll">
            <Switch>
              <Route path='/' exact render={() => (
                <>
                  <Light />
                  <Home setBodyHeight={setBodyHeight} />
                </>
              )} />
              <Route path='/about' exact render={() => <About setBodyHeight={setBodyHeight} />} />
              <Route path='/work' exact render={() => <Work setBodyHeight={setBodyHeight} />} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
        <Route path='/work' exact component={WorkPagination} />
        <Route path='/work' exact component={Circle} />
        <Header />
        <Route path='/' exact component={Contact} />
        <Cursor />
        <Loader />
      </ContextProvider>
    </Suspense>
  );
}

export default App;
