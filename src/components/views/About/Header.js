import React, { useEffect, useContext } from 'react'
import gsap from 'gsap';

import aboutheader from '../../../animations/aboutHeader';
import { moveLines } from '../../../animations/aboutHeader';
import { LoadingContext } from '../../../context';

function Header() {

  const { loaded } = useContext(LoadingContext)

  useEffect(() => {
    if (!loaded) return;
    gsap.to('.about__line', 1, { x: 0, ease: 'power2.out', onComplete: aboutheader }, .2)
    return () => {
      document.removeEventListener('mousemove', moveLines);
    }
  }, [loaded])

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
    </h1>
  )
}

export default Header
