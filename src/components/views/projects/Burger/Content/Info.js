import React from 'react'

import Button from '../../../../shared/Button';

function Info() {
  return (
    <div className='burger__info'>
      <h1 className='burger__title'><span><span>Burger Project</span></span></h1>
      <div className='burger__date'><span><span>/2020</span></span></div>
      <div className='burger__description'>
        <span><span>Inspired</span></span><span><span>by</span></span><span><span>Maximilian Schwarzmüller,</span></span><span><span>Burger</span></span><span><span>Project</span></span><span><span>is</span></span><span><span>responsive,</span></span><span><span>full</span></span><span><span>stack</span></span><span><span>application</span></span><span><span>built</span></span><span><span>with</span></span><span><span>technologies</span></span><span><span>such</span></span><span><span>as</span></span><span><span>react,</span></span><span><span>gsap,</span></span><span><span>firebase,</span></span><span><span>redux,</span></span><span><span>svg</span></span><span><span>animations</span></span><span><span>among</span></span>
        <span><span>others.</span></span><span><span>While</span></span><span><span>providing</span></span><span><span>great</span></span><span><span>user</span></span><span><span>experience,</span></span><span><span>consumer</span></span><span><span>can</span></span>
        <span><span>create</span></span><span><span>account,</span></span><span><span>place</span></span><span><span>orders</span></span>
        <span><span>in</span></span><span><span>the</span></span><span><span>most</span></span><span><span>enjoyable</span></span><span><span>way.</span></span>
      </div>
      <div className='burger__launch'><span><span><a href='https://burger-project-ed64a.web.app/' target='blank'><Button type='white'>Launch Project<i className='fas fa-long-arrow-alt-right'></i></Button></a></span></span>
      </div>
    </div>
  )
}

export default Info
