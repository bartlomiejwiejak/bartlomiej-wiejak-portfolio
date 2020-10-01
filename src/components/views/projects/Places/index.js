import React from 'react';
import ReactDOM from 'react-dom';

import ProjectAnimation from '../ProjectAnimation';
import Content from './Content';

const Places = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectAnimation titleLeft='Your' titleRight='Place' projectIndex={1} />, document.getElementById('root'))}
      <div className='project-content__header' />
      <Content />
    </div>
  );
}

export default Places;