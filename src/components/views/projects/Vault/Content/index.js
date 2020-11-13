import React from 'react'

import mobile1 from '../../../../../assets/projects/vault/mobile-1.jpg';
import mobile2 from '../../../../../assets/projects/vault/mobile-2.jpg';
import mobile3 from '../../../../../assets/projects/vault/mobile-3.jpg';
import HighLightText from '../../../../shared/HighlightText';
import homeEnterDesktop from '../../../../../assets/projects/vault/home-enter-desktop.mp4';
import homeEnterMobile from '../../../../../assets/projects/vault/home-enter-mobile.mp4';
import desktopLogin from '../../../../../assets/projects/vault/desktop-login.jpg';
import shopDesktop from '../../../../../assets/projects/vault/shop-desktop.mp4';
import aboutDesktop from '../../../../../assets/projects/vault/about-video-desktop.mp4';
import Info from './Info';

function Content() {
  return (
    <div className='project-content'>
      <Info />
      <section className="project-content__section project-content__section--dark">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container" dangerouslySetInnerHTML={{
            __html: `
          <video muted playsinline type='video/mp4' draggable=false class='project-content__image' autoplay loop src=${homeEnterDesktop}></video>
          <video muted playsinline type='video/mp4' draggable=false src=${homeEnterMobile} class='project-content__image__mobile' autoplay loop ></video>
          `}}>

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
        <div className="project-content__image-container" dangerouslySetInnerHTML={{
          __html: `
          <video muted playsinline type='video/mp4' src=${aboutDesktop} draggable=false autoplay loop class="project-content__image" />
        `}}>
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
          <div className="project-content__image-container" dangerouslySetInnerHTML={{
            __html: `
            <video muted playsinline type='video/mp4' draggable=false autoplay loop class='project-content__image' src=${shopDesktop} />
          `}}>
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