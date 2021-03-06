import React from 'react';
import ReactDOM from 'react-dom';

import useAnimation from '../../../hooks/useAnimation';
import Contact from './Contact';
import Light from './Light';
import Header from './Header';
import Player from './Player';

const Home = () => {

  useAnimation('HOME')

  return (
    <>
      {ReactDOM.createPortal(<Contact />, document.getElementById('root'))}
      {ReactDOM.createPortal(<Player />, document.getElementById('root'))}
      <Light />
      <div className="home">
        <Header>
          <Header shadow />
        </Header>
      </div>
    </>
  );
}

export default Home;