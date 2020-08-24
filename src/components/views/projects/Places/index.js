import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import headerImg from '../../../../assets/projects/places/header.bmp';
// import Content from './Content';

const Places = ({ setBodyHeight }) => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader src={headerImg} titleLeft='Places' titleRight='App' setBodyHeight={setBodyHeight} projectIndex={1} />, document.getElementById('root'))}
      <div className='project-content__header'></div>
      {/* <Content /> */}
    </div>
  );
}

export default Places;