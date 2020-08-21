import React, { useEffect, useContext } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import photo from '../../../assets/about/photo.jpg';
import isMobile from '../../../functions/isMobile';
import { LoadingContext } from '../../../context';

function Description() {

  const { loaded } = useContext(LoadingContext)

  useEffect(() => {
    if (!loaded) return;
    gsap.to('.about__description__img-reveal', .7, { opacity: 1 })
    gsap.to('.about__description__img', .7, { opacity: 1 })
    gsap.registerPlugin(ScrollTrigger);

    if (isMobile()) {
      gsap.to('.about__description__img-reveal', 1.6, {
        height: 0, ease: 'power2.out'
      })
    } else {
      gsap.to('.about__description__img-reveal', 1.6, {
        scrollTrigger: {
          trigger: '.about__description__img-container',
          start: 'top center',
        }, height: 0, ease: 'power2.out'
      })
    }
    setTimeout(() => {
      gsap.from('.about__description__img', {
        scrollTrigger: {
          trigger: '.about__description__img-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        scale: 1.2
      })
    }, 700)
  }, [loaded])

  return (
    <>
      <div className="about__description">
        <div className="about__description__text">
          <div className="about__description__heading">
            <h2 className="about__description__heading__line"><span><span>Hey, I'm Bartłomiej Wiejak</span></span></h2>
            <h2 className="about__description__heading__line"><span><span>a self taught developer.</span></span></h2>
          </div>
          <p className='about__description__paragraph'>
            <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>simply</span></span><span><span>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGl</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
          </p>
        </div>
        <div className="about__description__img-container">
          <img draggable={false} src={photo} alt="Bartlomiej Wiejak" className="about__description__img" />
          <div className="about__description__img-reveal"></div>
        </div>
      </div>
      <p className="about__description__paragraph--mobile">
        <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>simply</span></span><span><span>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGl</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
      </p>
    </>
  )
}

export default Description
