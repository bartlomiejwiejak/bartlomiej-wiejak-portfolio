import React from 'react';
import Button from './Button';

const Project = ({ src, titleUp, titleDown }) => {
  return (
    <div className='project'>
      <div className="project__container">
        <div className="project__img-container">
          <img draggable={false} src={src} alt="project" className="project__img" />
          <div className="project__img-reveal"></div>
        </div>
        <div className="project__button-container"><Button type='black'>Explore project</Button></div>
      </div>
      <h2 className="project__title project__title--down"><div>{titleDown}</div></h2>
      <h2 className="project__title project__title--up"><div>{titleUp}</div></h2>
    </div>
  );
}

export default Project;
