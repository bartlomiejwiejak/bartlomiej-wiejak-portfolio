import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import headerImg from '../../../../assets/projects/burger/header.jpg';
import Content from './Content';

const Burger = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader src={headerImg} titleLeft='Burger' titleRight='Project' projectIndex={0} />, document.getElementById('root'))}
      <div className='project-content__header'></div>
      <Content />
    </div>
  );
}

export default Burger;