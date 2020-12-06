import React, { useEffect, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../../shared/Button';
import circle from '../../../assets/about/circle-letswork.png';
import HighlightText from '../../shared/HighlightText';
import { LoadingContext } from '../../../context';

function Contact() {

  const { loadingState } = useContext(LoadingContext);

  useEffect(() => {
    if (!loadingState.isLoaded) return;
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
  }, [loadingState.isLoaded])

  return (
    <div className="about__contact">
      <img className='about__contact__circle' src={circle} alt='' />
      <h1><span><span>Do</span></span><span><span>you</span></span><span><span>have</span></span><span><span>a</span></span><span><span>project</span></span><span><span>on</span></span><span><span>mind,</span></span><span><span>that</span></span><span><span>you</span></span><span><span>think</span></span><span><span>I</span></span><span><span>could</span></span><span><span>help</span></span><span><span>with?</span></span></h1>
      <h2><HighlightText arrow type='black' href='mailto:hello@bartlomiejwiejak.com'> Go ahead and drop me a line</HighlightText></h2>
      <div className="about__contact__content">
        <ul>
          <h3><span><span>Work Inquiries</span></span></h3>
          <li><span><span>hello@bartlomiejwiejak.com</span></span></li>
        </ul>
        <ul>
          <h3><span><span>Social</span></span></h3>
          <li><span><span><Button href='https://www.facebook.com/bartlomiejwiejak' type='black' arrow>Facebook</Button></span></span></li>
          <li><span><span><Button href='https://github.com/bartlomiejwiejak' type='black' arrow>Github</Button></span></span></li>
          <li><span><span><Button href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-3431941b9/' type='black' arrow>LinkedIn</Button></span></span></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact

