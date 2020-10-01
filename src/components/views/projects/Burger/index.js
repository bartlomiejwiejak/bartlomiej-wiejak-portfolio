import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import Content from './Content';

const Burger = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader titleLeft='Burger' titleRight='Project' projectIndex={2} />, document.getElementById('root'))}
      <div className='project-content__header' />
      <Content />
    </div>
  );
}

export default Burger;