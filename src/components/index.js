import React, { useEffect, useRef, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import gsap from 'gsap';

import Header from './layout/Header';
import Cursor from './layout/Cursor';
import Home from './views/Home';
import About from './views/About';
import useWindowSize from '../hooks/useWindowSize';
import ContextProvider from '../context';
import Loader from './layout/Loader';
import Work from './views/Work';
import BurgerProject from './views/projects/Burger'
import PlacesApp from './views/projects/Places';
import skewConfig from '../config/skewScrolling';
import ScrollBar from './layout/ScrollBar';
import useBodyHeight from '../hooks/useBodyHeight';

export default function () {

  const scrollRef = useRef();
  const appRef = useRef();
  const windowSize = useWindowSize();
  const { setBodyHeight, bodyHeight } = useBodyHeight()

  useEffect(() => {
    const skewScrolling = () => {
      skewConfig.current = window.scrollY;
      skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
      skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

      const difference = skewConfig.current - skewConfig.rounded;
      const acceleration = difference / window.innerWidth;
      const velocity = +acceleration;
      const skew = velocity * 10;
      scrollRef.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`;
      const bodyHeight = document.querySelector('body').getBoundingClientRect().height;
      if (bodyHeight) {
        const y = (window.innerHeight / bodyHeight) * window.scrollY;
        gsap.to('.scrollbar__thumb', 1, { y: y })
      }

      requestAnimationFrame(skewScrolling);
    }
    const animationFrame = requestAnimationFrame(skewScrolling)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.width, windowSize.height, setBodyHeight])

  return (
    <Suspense fallback={null}>
      <ContextProvider>
        <Loader />
        <ScrollBar bodyHeight={bodyHeight} />
        <Header />
        <div className="background"></div>
        <div ref={appRef} className="view">
          <div ref={scrollRef} className="scroll">
            <Switch>
              <Route path='/' exact render={() => <Home setBodyHeight={setBodyHeight} />} />
              <Route path='/about' exact render={() => <About setBodyHeight={setBodyHeight} />} />
              <Route path='/work' exact render={() => <Work setBodyHeight={setBodyHeight} />} />
              <Route path='/work/burger-project' exact render={() => <BurgerProject setBodyHeight={setBodyHeight} />} />
              <Route path='/work/places-app' exact render={() => <PlacesApp setBodyHeight={setBodyHeight} />} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
        <Cursor />
      </ContextProvider>
    </Suspense>
  );
}