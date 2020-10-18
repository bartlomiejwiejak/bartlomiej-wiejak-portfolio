import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Cursor from './layout/Cursor';
import ContextProvider from '../context';
import Loader from './layout/Loader';
import BurgerProject from './views/projects/Burger'
import VaultClothing from './views/projects/Vault';
import PlacesApp from './views/projects/Places';
import ScrollBar from './layout/ScrollBar';
import Background from './layout/Background';
import useSkewScrolling from '../hooks/useSkewScrolling';
import useResize from '../hooks/useResize';
import WebGLRenderer from '../components/webgl';
import isMobile from '../functions/isMobile';
import Home from './views/Home';
import About from './views/About';
import Work from './views/Work';
import WorkFill from './views/Work/WorkFill';

export default function () {

  useSkewScrolling();
  useResize();

  return (
    <ContextProvider>
      <Loader />
      {!isMobile() && <ScrollBar />}
      <Header />
      <Background />
      <Route path='/work' component={WebGLRenderer} />
      <div className="view">
        <div className="scroll">
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
      <Route path='/work' exact component={WorkFill} />
      {!isMobile() && <Cursor />}
    </ContextProvider>
  );
}