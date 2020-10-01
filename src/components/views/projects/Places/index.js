import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import Content from './Content';

const Places = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader titleLeft='Your' titleRight='Place' projectIndex={1} />, document.getElementById('root'))}
      <div className='project-content__header' />
      <Content />
    </div>
  );
}

export default Places;