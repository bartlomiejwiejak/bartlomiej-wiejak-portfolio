import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom';
import gsap from 'gsap';

import photo from '../../../assets/about/photo.jpg';
import isMobile from '../../../functions/isMobile';
import { cursorHide, cursorBackToNormal } from '../../../animations/cursor';
import gif1 from '../../../assets/about/giphs/giph1.gif'
import gif2 from '../../../assets/about/giphs/giph2.gif'
import gif3 from '../../../assets/about/giphs/giph3.gif'
import gif4 from '../../../assets/about/giphs/giph4.gif'

function Description() {

  const [gifUrl, setGifUrl] = useState(null)

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
            <h2 className="about__description__heading__line"><span><span>a freelance developer.</span></span></h2>
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
        <span><span>I</span></span><span><span>enjoy</span></span><span><span style={brownWordStyle}>building</span></span><span><span onMouseEnter={() => mouseEnterHandle(gif1)} onMouseOut={mouseOutHandle} style={brownWordStyle}>interactive,</span></span><span><span>heavy</span></span><span><span>javascript</span></span><span><span>application</span></span><span><span>with</span></span><span><span>slick,</span></span><span><span onMouseEnter={() => mouseEnterHandle(gif2)} onMouseOut={mouseOutHandle} style={brownWordStyle}>creative</span></span><span><span>animations.</span></span><span><span>I</span></span><span><span>mostly</span></span><span><span>work</span></span><span><span>with</span></span><span><span>react.</span></span><span><span>I'm</span></span><span><span>simply</span></span><span><span style={brownWordStyle} onMouseEnter={() => mouseEnterHandle(gif3)} onMouseOut={mouseOutHandle}>passionate</span></span><span><span>about</span></span><span><span>technology</span></span><span><span>and</span></span><span><span>seek</span></span><span><span>to</span></span><span><span style={brownWordStyle} onMouseEnter={() => mouseEnterHandle(gif4)} onMouseOut={mouseOutHandle}>perfect</span></span><span><span>myself</span></span><span><span>every</span></span><span><span>day.</span></span><span><span>Now,</span></span><span><span>I'm</span></span><span><span>focussing</span></span><span><span>on</span></span><span><span>WebGL</span></span><span><span>and</span></span><span><span>GLSL.</span></span>
      </p>
    </>
  )
}

export default Description;