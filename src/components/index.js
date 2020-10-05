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
import VaultClothing from './views/projects/Vault';
import PlacesApp from './views/projects/Places';
import ScrollBar from './layout/ScrollBar';
import Background from './layout/Background';
import useSkewScrolling from '../hooks/useSkewScrolling';
import useBodyHeight from '../hooks/useBodyHeight';
import useResize from '../hooks/useResize';
import WebGLRenderer from '../components/webgl';
import isMobile from '../functions/isMobile';

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
    setTimeout(setBodyHeight, 3000);
  }, [setBodyHeight, location.pathname])

  return (
    <Suspense fallback={null}>
      <ContextProvider>
        <Loader />
        {!isMobile() && <ScrollBar bodyHeight={bodyHeight} />}
        <Header />
        <Background />
        <Route path='/work' component={WebGLRenderer} />
        <div className="view">
          <div ref={scrollRef} className="scroll">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/work' exact component={Work} />
              <Route path='/work/burger-project' exact component={BurgerProject} />
              <Route path='/work/places-app' exact component={PlacesApp} />
              <Route path='/work/vault-clothing' exact component={VaultClothing} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
        {!isMobile() && <Cursor />}
      </ContextProvider>
    </Suspense>
  );
}