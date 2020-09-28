import React, { useEffect, useContext, useCallback, useState } from 'react'
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import photo from '../../../assets/about/photo.jpg';
import isMobile from '../../../functions/isMobile';
import { LoadingContext } from '../../../context';
import { cursorHide, cursorBackToNormal } from '../../../animations/cursor';
import gif1 from '../../../assets/about/giphs/giph1.gif'
import gif2 from '../../../assets/about/giphs/giph2.webp'
import gif3 from '../../../assets/about/giphs/giph3.webp'
import gif4 from '../../../assets/about/giphs/giph4.webp'

function Description() {

  const { loaded } = useContext(LoadingContext)
  const [gifUrl, setGifUrl] = useState(null)

  useEffect(() => {
    if (!loaded) return;
    let timeout;
    gsap.registerPlugin(ScrollTrigger);

    if (isMobile()) {
      setTimeout(() => {
        gsap.set('.about__description__img', { opacity: 1 })
        gsap.set('.about__description__img-reveal', { opacity: 1 })
        gsap.to('.about__description__img-reveal', 1.6, {
          height: 0, ease: 'power2.out'
        })
        gsap.from('.about__description__img', 1.6, {
          scale: 1.4, ease: 'power2.out'
        })
      }, 600)
    } else {
      gsap.set('.about__description__img-reveal', { opacity: 1 })
      gsap.to('.about__description__img-reveal', 1.4, {
        scrollTrigger: {
          trigger: '.about__description__img-container',
          start: '250px center',
        }, height: 0, ease: 'power2.out'
      })
      gsap.from('.about__description__img', 1.4, {
        onStart: () => gsap.set('.about__description__img', { opacity: 1 }),
        scrollTrigger: {
          trigger: '.about__description__img-container',
          start: '250px center',
        }, scale: 1.6, ease: 'power2.out'
      })
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [loaded])

  const moveGifHandle = useCallback((event) => {
    const el = document.querySelector('.about__description__gif');
    const height = el.getBoundingClientRect().height
    gsap.to(el, .6, { x: event.clientX, y: event.clientY - height - 50 })
  }, [])

  const mouseEnterHandle = (url) => {
    if (isMobile()) return;
    setGifUrl(url)
    cursorHide()
    gsap.to('.about__description__gif', .5, { autoAlpha: 1 })
    document.addEventListener('mousemove', moveGifHandle)
  }
  const mouseOutHandle = () => {
    if (isMobile()) return;
    cursorBackToNormal()
    setGifUrl(null)
    gsap.set('.about__description__gif', { autoAlpha: 0 })
    document.removeEventListener('mousemove', moveGifHandle)
  }

  const brownWordStyle = { color: 'var(--brown)' }

  return (
    <>
      {ReactDOM.createPortal(<img className='about__description__gif' src={gifUrl} alt='' />, document.getElementById('root'))}
      <div className="about__description">
        <div className="about__description__text">
          <div className="about__description__heading">
            <h2 className="about__description__heading__line"><span><span>Hey, I'm Bartłomiej Wiejak</span></span></h2>
            <h2 className="about__description__heading__line"><span><span>a self taught developer.</span></span></h2>
          </div>
          <p className='about__description__paragraph'>
            <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span onMouseEnter={() => mouseEnterHandle(gif1)} onMouseOut={mouseOutHandle} style={brownWordStyle}>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick,</span></span><span><span onMouseEnter={() => mouseEnterHandle(gif2)} onMouseOut={mouseOutHandle} style={brownWordStyle}>creative</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>simply</span></span><span><span style={brownWordStyle} onMouseEnter={() => mouseEnterHandle(gif3)} onMouseOut={mouseOutHandle}>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span style={brownWordStyle} onMouseEnter={() => mouseEnterHandle(gif4)} onMouseOut={mouseOutHandle}>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now,</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGL</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
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

export default Description;