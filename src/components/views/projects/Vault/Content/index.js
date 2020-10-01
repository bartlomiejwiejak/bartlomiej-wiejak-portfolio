import React from 'react'

import mobile1 from '../../../../../assets/projects/vault/mobile-1.png';
import mobile2 from '../../../../../assets/projects/vault/mobile-2.png';
import mobile3 from '../../../../../assets/projects/vault/mobile-3.png';
import HighLightText from '../../../../shared/HighlightText';
import homeEnterDesktop from '../../../../../assets/projects/vault/home-enter-desktop.mp4';
import homeEnterMobile from '../../../../../assets/projects/vault/home-enter-mobile.mp4';
import desktopLogin from '../../../../../assets/projects/vault/desktop-login.png';
import shopDesktop from '../../../../../assets/projects/vault/shop-desktop.mp4';
import aboutDesktop from '../../../../../assets/projects/vault/about-video-desktop.mp4';
import Info from './Info';

function Content() {
  return (
    <div className='project-content'>
      <Info />
      <section className="project-content__section project-content__section--dark">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <video draggable={false} className='project-content__image' autoPlay loop src={homeEnterDesktop} />
            <video draggable={false} src={homeEnterMobile} className='project-content__image__mobile' autoPlay loop />
          </div>
        </div>
      </section>
      <section className="project-content__section project-content__section--dark">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <img draggable={false} src={desktopLogin} alt='' className='project-content__image' />
          </div>
        </div>
      </section>
      <section className="project-content__section project-content__section--dark">
        <h2 className='project-content__line project-content__line--white'>Vault Clothing — Vault Clothing — Vault Clothing — Vault Clothing</h2>
      </section>
      <section className="project-content__section project-content__section--dark">
        <div className="project-content__image-container">
          <video src={aboutDesktop} draggable={false} autoPlay loop className="project-content__image" />
        </div>
      </section>
      <section className="project-content__section project-content__section--light">
        <div className="project-content__phones">
          <img draggable={false} src={mobile1} alt='' />
          <img draggable={false} src={mobile2} alt='' />
          <img draggable={false} src={mobile3} alt='' />
        </div>
      </section>
      <section className="project-content__section project-content__section--light">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <video draggable={false} autoPlay loop className='project-content__image' src={shopDesktop} />
          </div>
        </div>
      </section>
      <section className="project-content__section project-content__section--light">
        <div className="project-content__next-project project-content__next-project--black">
          <p><span><span>Go to</span></span></p>
          <HighLightText type='black' to='/work/places-app'>Your Place</HighLightText>
        </div>
      </section>
    </div>
  )
}

export default Content