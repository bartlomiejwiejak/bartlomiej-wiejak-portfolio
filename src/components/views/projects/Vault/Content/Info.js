import React from 'react'

import Button from '../../../../shared/Button';

function Info() {
  return (
    <div className="project-content__section project-content__section--dark">
      <div className='project-content__info project-content__info--white'>
        <h1 className='project-content__title'><span><span>Vault Clothing</span></span></h1>
        <div className='project-content__date'><span><span>/2020</span></span></div>
        <div className='project-content__description'>
          <span><span>Vault</span></span><span><span>Clothing</span></span><span><span>is a</span></span><span><span>e-commerce</span></span>
          <span><span>website,</span></span><span><span>changing</span></span>
          <span><span>online</span></span><span><span>shopping</span></span><span><span>into</span></span><span><span>an</span></span><span><span>experience.</span></span><span><span>In</span></span><span><span>order</span></span><span><span>to</span></span><span><span>accomplish</span></span><span><span>it's</span></span><span><span>goals,</span></span><span><span>technologies</span></span><span><span>such as</span></span><span><span>React,</span></span><span><span>Redux</span></span><span><span>and</span></span><span><span>GSAP</span></span><span><span>are</span></span><span><span>involved.</span></span><span><span>Backend</span></span><span><span>is</span></span>
          <span><span>handled</span></span><span><span>using</span></span><span><span>firebase/firestore,</span></span><span><span>stripe</span></span><span><span>and</span></span><span><span>express.</span></span>
        </div>
        <div className='project-content__launch'><span><span><Button href='https://places-app-mern2020.herokuapp.com/' type='white' arrow>Launch Project</Button></span></span>
        </div>
      </div>
    </div>
  )
}

export default Info