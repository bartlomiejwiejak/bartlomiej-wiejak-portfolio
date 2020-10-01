import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from '../ProjectHeader';
import Content from './Content';

const VaultClothing = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectHeader titleLeft='Vault' titleRight='Cloth' projectIndex={0} />, document.getElementById('root'))}
      <div className='project-content__header' />
      <Content />
    </div>
  );
}

export default VaultClothing;