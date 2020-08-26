import React, { useEffect, useContext, useCallback, useState } from 'react'
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import photo from '../../../assets/about/photo.jpg';
import isMobile from '../../../functions/isMobile';
import { LoadingContext } from '../../../context';
import { cursorHide, cursorBackToNormal } from '../../../animations/cursor';

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
      gsap.to('.about__description__img-reveal', 1.6, {
        scrollTrigger: {
          trigger: '.about__description__img-container',
          start: '250px center',
        }, height: 0, ease: 'power2.out'
      })
      gsap.from('.about__description__img', 1.6, {
        onStart: () => gsap.set('.about__description__img', { opacity: 1 }),
        scrollTrigger: {
          trigger: '.about__description__img-container',
          start: '250px center',
        }, scale: 1.4, ease: 'power2.out', onComplete: () => {
          gsap.from('.about__description__img', {
            scrollTrigger: {
              trigger: '.about__description__img-container',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            },
            scale: 1.2
          })
        }
      })
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [loaded])

  const moveGifHandle = useCallback((event) => {
    gsap.to('.about__description__gif', .5, { x: event.clientX - 50, y: event.clientY - 230 })
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
            <span><span>I</span></span><span><span>enjoy</span></span><span><span>building</span></span><span><span onMouseEnter={() => mouseEnterHandle('https://media2.giphy.com/media/IFUqhbg0QbqG4/giphy.gif?cid=ecf05e47jqvlw50b43ch6ehluspux1r8yqnegrtdazqiq5k2&rid=giphy.gif')} onMouseOut={mouseOutHandle} style={{ color: 'var(--brown)' }}>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick,</span></span><span><span onMouseEnter={() => mouseEnterHandle('https://media2.giphy.com/media/mgBcFrFyREm8E/giphy.gif?cid=ecf05e47lgx8kyz1cfveuz8003nifmcm3ac9k31ruupyy2qo&rid=giphy.gif')} onMouseOut={mouseOutHandle} style={{ color: 'var(--brown)' }}>creative</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>a</span></span><span><span onMouseEnter={() => mouseEnterHandle('https://64.media.tumblr.com/792cb856bb01952415649aefad2dc2a7/tumblr_mfc6baCs3w1qala6eo1_400.gifv')} onMouseOut={mouseOutHandle} style={{ color: 'var(--brown)' }} >developer</span></span><span><span>simply</span></span><span><span>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now,</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGl</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
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