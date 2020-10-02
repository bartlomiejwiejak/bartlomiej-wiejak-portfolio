import React from 'react'

function Header() {

  return (
    <h1 className='about__heading'>
      <p className='about__line about__line--1'>
        <span>INTERACTIVE</span>
      </p>
      <p className='about__line about__line--2'>
        <span>& CREATIVE</span>
      </p>
      <p className='about__line about__line--3'>
        <span>DEVELOPER</span>
      </p>
      <div className="about__heading__indicator">
        <span><span>Scroll to discover</span></span>
        <div className='about__heading__indicator__line'>
          <div className='about__heading__indicator__line-fill' />
        </div>
      </div>
    </h1>
  )
}

export default Header