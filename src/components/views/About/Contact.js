import React, { useEffect, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../../shared/Button';
import circle from '../../../assets/about/circle-letswork.png';
import { LoadingContext } from '../../../context';

function Contact() {

  const { loaded } = useContext(LoadingContext);

  useEffect(() => {
    if (!loaded) return;
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.to('.about__contact__circle', {
        scrollTrigger: {
          trigger: '.about__contact__circle',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        },
        rotate: '180deg'
      })
    }, 3000)
  }, [loaded])

  return (
    <div className="about__contact">
      <img className='about__contact__circle' src={circle} alt='' />
      <div className="about__contact__content">
        <ul>
          <h3><span><span>Work Inquiries</span></span></h3>
          <li><span><span>hello@bartlomiejwiejak.com</span></span></li>
        </ul>
        <ul>
          <h3><span><span>Social</span></span></h3>
          <li><span><span><Button href='https://twitter.com/BartekWiejak' type='black' arrow>Twitter</Button></span></span></li>
          <li><span><span><Button href='https://github.com/bartlomiejwiejak' type='black' arrow>Github</Button></span></span></li>
          <li><span><span><Button href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-4b9a891b3/' type='black' arrow>Linkedin</Button></span></span></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
