import React from 'react'

import Button from '../../../../shared/Button';

function Info() {
  return (
    <div className="project-content__section project-content__section--light">
      <div className='project-content__info project-content__info--black'>
        <h1 className='project-content__title'><span><span>Places App</span></span></h1>
        <div className='project-content__date'><span><span>/2020</span></span></div>
        <div className='project-content__description'>
          <span><span>Places</span></span><span><span>App</span></span><span><span>is</span></span><span><span>fully responsive,</span></span>
          <span><span>social</span></span><span><span>media</span></span>
          <span><span>application,</span></span><span><span>connecting</span></span><span><span>users</span></span><span><span>who</span></span><span><span>want</span></span><span><span>to</span></span><span><span>share</span></span><span><span>their</span></span><span><span>experiences</span></span><span><span>travelling</span></span><span><span>around</span></span><span><span>the</span></span><span><span>world.</span></span><span><span>Frontend</span></span><span><span>side</span></span><span><span>of</span></span><span><span>project</span></span><span><span>is</span></span><span><span>handled</span></span><span><span>by</span></span>
          <span><span>React,</span></span><span><span>while</span></span><span><span>server</span></span><span><span>side</span></span><span><span>technologies</span></span><span><span>are</span></span><span><span>Express,</span></span><span><span>MongoDB</span></span>
          <span><span>and</span></span><span><span>Mongoose.</span></span><span><span>Consumers</span></span><span><span>can</span></span>
          <span><span>create</span></span><span><span>places,</span></span><span><span>navigate</span></span><span><span>them</span></span><span><span>through</span></span><span><span>google</span></span><span><span>maps,</span></span><span><span>as</span></span>
          <span><span>well</span></span><span><span>as</span></span><span><span>place</span></span><span><span>comments,</span></span><span><span>like</span></span><span><span>or</span></span><span><span>follow</span></span><span><span>others.</span></span>
        </div>
        <div className='project-content__launch'><span><span><Button href='https://places-app-mern2020.herokuapp.com/' type='black' arrow>Launch Project</Button></span></span>
        </div>
      </div>
    </div>
  )
}

export default Info