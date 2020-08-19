import React, { useEffect, useContext } from 'react';
import gsap from 'gsap';

import Button from '../../../shared/Button';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeDesktop from '../../../../assets/projects/burger/home-desktop.png';
import homeMobile from '../../../../assets/projects/burger/home-mobile.png';
import homeVideo from '../../../../assets/projects/burger/home-video.mp4';
import mobile1 from '../../../../assets/projects/burger/home-mobile.png';
import mobile2 from '../../../../assets/projects/burger/builder-mobile.png';
import mobile3 from '../../../../assets/projects/burger/menu-mobile.png';
import buildingVideo from '../../../../assets/projects/burger/building-video.mp4';
import homeLoad from '../../../../assets/projects/burger/home-load.mp4';
import homeLoadMobile from '../../../../assets/projects/burger/home-load-mobile.mp4';
import sideDrawer from '../../../../assets/projects/burger/sidedrawer.mp4';
import order from '../../../../assets/projects/burger/order.png';
import { LoadingContext } from '../../../../context';
import HighLightText from '../../../shared/HighlightText';

const Burger = () => {

  const { loaded } = useContext(LoadingContext);

  useEffect(() => {
    if (loaded) {
      gsap.registerPlugin(ScrollTrigger)
      document.querySelectorAll('.burger span span').forEach(span => {
        if (span.classList.contains('highlight-text')) {
          return;
        }
        gsap.to(span, 1.5, {
          y: 0, autoAlpha: 1, delay: .2, scrollTrigger: {
            trigger: span,
            start: '100px bottom'
          }
        })
      })
      gsap.to('.burger__next-project .highlight-text', 1, {
        y: 0, autoAlpha: 1, scrollTrigger: {
          trigger: '.burger__next-project > span',
          start: 'bottom bottom'
        }
      })
      document.querySelectorAll('.burger .content-wrapper > *').forEach(item => {
        gsap.from(item, {
          scale: 1.1, scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }
  }, [loaded])

  return (
    <div className='burger'>
      <div className='burger__header'></div>
      <div className='burger__content'>
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
        <div className='burger__container'>
          <div className='content-wrapper'><img className='burger__big' src={homeDesktop} alt='burger home dekstop' /></div>
          <img className='burger__mobile' src={homeMobile} alt="burger home mobile" />
        </div>
        <div className='content-wrapper'><video src={homeVideo} autoPlay loop className="burger__video"></video></div>
        <div className="burger__mobile-container">
          <img src={mobile1} alt='mobile burger 1' className="burger__mobile-container__img" />
          <img src={mobile2} alt='mobile burger 1' className="burger__mobile-container__img" />
          <img src={mobile3} alt='mobile burger 1' className="burger__mobile-container__img" />
        </div>
        <div className='content-wrapper'><video src={buildingVideo} autoPlay loop className='burger__video'></video></div>
        <div className="burger__container">
          <div className='content-wrapper'><video autoPlay loop className='burger__big' src={homeLoad}></video></div>
          <video autoPlay loop className='burger__mobile' src={homeLoadMobile}></video>
        </div>
        <div className="burger__container">
          <div className="content-wrapper"><img src={order} alt="order" className="burger__big" /></div>
          <video loop autoPlay src={sideDrawer} className="burger__mobile"></video>
        </div>
        <div className="burger__next-project">
          <p><span><span>See</span></span></p>
          <HighLightText type='white' to='/work' >More Projects</HighLightText>
        </div>
      </div>
    </div>
  );
}

export default Burger;
