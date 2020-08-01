import React from 'react';
import Button from './Button';

const Project = ({ src, titleUp, titleDown }) => {
  return (
    <div className='project'>
      <div className="project__container">
        <img draggable={false} src={src} alt="project" className="project__img" />
        <div className="project__button-container"><Button type='black'>Explore project</Button></div>
      </div>
      <h2 className="project__title project__title--down">{titleDown}</h2>
      <h2 className="project__title project__title--up">{titleUp}</h2>
    </div>
  );
}

export default Project;
