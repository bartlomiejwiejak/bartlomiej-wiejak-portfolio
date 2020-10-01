import React from 'react';
import ReactDOM from 'react-dom';

import ProjectAnimation from '../ProjectAnimation';
import Content from './Content';

const Burger = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectAnimation titleLeft='Burger' titleRight='Project' projectIndex={2} />, document.getElementById('root'))}
      <div className='project-content__header' />
      <Content />
    </div>
  );
}

export default Burger;