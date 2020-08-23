import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import headerImg from '../../../../assets/projects/burger/header.png';
import Content from './Content';

const Burger = ({ setBodyHeight }) => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader src={headerImg} titleLeft='Burger' titleRight='Project' setBodyHeight={setBodyHeight} projectIndex={1} />, document.getElementById('root'))}
      <div className='project-content__header'></div>
      <Content />
    </div>
  );
}

export default Burger;