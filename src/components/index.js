import React, { useEffect, useRef, Suspense, useCallback } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Cursor from './layout/Cursor';
import Contact from './views/Home/Contact';
import Home from './views/Home';
import About from './views/About';
import useWindowSize from '../hooks/useWindowSize';
import ContextProvider from '../context';
import Loader from './layout/Loader';
import Work from './views/Work';
import WorkPagination from './views/Work/WorkPagination';
import Light from './views/Home/Light';
import Circle from './shared/Circle';
import BurgerProject from './views/projects/Burger'
import ProjectHeader from './views/projects/ProjectHeader';
import burger from '../assets/projects/burger/header.png';
import skewConfig from '../config/skewConfig';

export default function () {

  const scrollRef = useRef();
  const appRef = useRef();
  const windowSize = useWindowSize();

  const skewScrolling = useCallback(() => {
    skewConfig.current = window.scrollY;
    skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 10;

    scrollRef.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(skewScrolling);
  }, [windowSize.width]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [skewScrolling])

  const setBodyHeight = useCallback(() => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
      }px`;
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.width, windowSize.height, setBodyHeight])

  return (
    <Suspense fallback={null}>
      <ContextProvider>
        <div className="background"></div>
        <Route path='/work/burger-project' exact render={() => <ProjectHeader src={burger} titleLeft='Burger' titleRight='Project' setBodyHeight={setBodyHeight} projectIndex={1} />} />
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
              <Route path='/work/burger-project' exact render={() => <BurgerProject setBodyHeight={setBodyHeight} />} />
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