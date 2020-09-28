import React, { useEffect, useRef, Suspense } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

import Header from './layout/Header';
import Cursor from './layout/Cursor';
import Home from './views/Home';
import About from './views/About';
import ContextProvider from '../context';
import Loader from './layout/Loader';
import Work from './views/Work';
import BurgerProject from './views/projects/Burger'
import PlacesApp from './views/projects/Places';
import ScrollBar from './layout/ScrollBar';
import Background from './layout/Background';
import useSkewScrolling from '../hooks/useSkewScrolling';
import useBodyHeight from '../hooks/useBodyHeight';
import useResize from '../hooks/useResize';

export default function () {

  const scrollRef = useRef();
  const location = useLocation();

  const { setScrollElement } = useSkewScrolling();
  const { bodyHeight, setBodyHeight } = useBodyHeight();
  useResize(setBodyHeight);

  useEffect(() => {
    setScrollElement(scrollRef.current)
  }, [setScrollElement])
  useEffect(() => {
    setBodyHeight();
    setTimeout(() => {
      setBodyHeight();
    }, 1500);
  }, [location, setBodyHeight])

  return (
    <Suspense fallback={null}>
      <ContextProvider>
        <Loader />
        <ScrollBar bodyHeight={bodyHeight} />
        <Header />
        <Background />
        <div className="view">
          <div ref={scrollRef} className="scroll">
            <Switch>
              <Route path='/' exact render={() => <Home />} />
              <Route path='/about' exact render={() => <About />} />
              <Route path='/work' exact render={() => <Work />} />
              <Route path='/work/burger-project' exact render={() => <BurgerProject />} />
              <Route path='/work/places-app' exact render={() => <PlacesApp />} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
        <Cursor />
      </ContextProvider>
    </Suspense>
  );
}