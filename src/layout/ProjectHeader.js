import React from 'react';

const ProjectHeader = ({ src, titleLeft, titleRight }) => {
  return (
    <header className='project-header'>
      <img className='project-header__img' src={src} alt="project" />
      <h1 className='project-header__title project-header__title--left'>{titleLeft}</h1>
      <h1 className='project-header__title project-header__title--right'>{titleRight}</h1>
      <div className="project-header__scroll-indicator"><span>Scroll<i className="fas fa-long-arrow-alt-down"></i></span></div>
    </header>
  );
}

export default ProjectHeader;
