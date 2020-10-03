import React from 'react'

import Button from '../../../../shared/Button';

function Info() {
  return (
    <div className="project-content__section project-content__section--dark">
      <div className='project-content__info project-content__info--white'>
        <h1 className='project-content__title'><span><span>Burger Project</span></span></h1>
        <div className='project-content__date'><span><span>/2020</span></span></div>
        <div className='project-content__description'>
          <span><span>Highly</span></span><span><span>focussed</span></span><span><span>on</span></span><span><span>animated</span></span>
          <span><span>content,</span></span><span><span>Burger</span></span><span><span>Project</span></span><span><span>is a</span></span><span><span>responsive,</span></span><span><span>full</span></span><span><span>stack</span></span><span><span>application</span></span><span><span>built</span></span><span><span>with</span></span><span><span>technologies</span></span><span><span>such</span></span><span><span>as</span></span><span><span>react,</span></span><span><span>gsap,</span></span><span><span>firebase,</span></span><span><span>redux,</span></span><span><span>svg</span></span><span><span>animations</span></span><span><span>among</span></span>
          <span><span>others.</span></span>
        </div>
        <div className='project-content__launch'><span><span><Button href='https://burger-project-ed64a.web.app/' type='white' arrow>Launch Project</Button></span></span>
        </div>
      </div>
    </div>
  )
}

export default Info