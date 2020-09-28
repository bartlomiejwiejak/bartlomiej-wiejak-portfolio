import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import headerImg from '../../../../assets/projects/places/header.jpg';
import Content from './Content';

const Places = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader src={headerImg} titleLeft='Your' titleRight='Place' projectIndex={1} />, document.getElementById('root'))}
      <div className='project-content__header'></div>
      <Content />
    </div>
  );
}

export default Places;