import React from 'react';
import ReactDOM from 'react-dom';

import ProjectAnimation from '../ProjectAnimation';
import Content from './Content';

const VaultClothing = () => {

  return (
    <div>
      {ReactDOM.createPortal(<ProjectAnimation titleLeft='Vault' titleRight='Cloth' projectIndex={0} />, document.getElementById('root'))}
      <div className='project-content__header' />
      <Content />
    </div>
  );
}

export default VaultClothing;