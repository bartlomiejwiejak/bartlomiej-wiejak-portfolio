import React from 'react'

import homeVideo from '../../../../../assets/projects/burger/home-video.mp4';
import mobile1 from '../../../../../assets/projects/burger/home-mobile.png';
import mobile2 from '../../../../../assets/projects/burger/builder-mobile.png';
import mobile3 from '../../../../../assets/projects/burger/menu-mobile.png';
import buildingVideo from '../../../../../assets/projects/burger/building-video.mp4';
import homeLoad from '../../../../../assets/projects/burger/home-load.mp4';
import homeLoadMobile from '../../../../../assets/projects/burger/home-load-mobile.mp4';
import order from '../../../../../assets/projects/burger/order.png';
import HighLightText from '../../../../shared/HighlightText';
import Info from './Info';

function Content() {
  return (
    <div className='project-content'>
      <Info />
      <section className="project-content__section project-content__section--dark">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <video autoPlay loop className='project-content__image' src={homeLoad}></video>
            <video src={homeLoadMobile} autoPlay loop className='project-content__image__mobile' alt='burger__video' />
          </div>
        </div>
      </section>
      <section className="project-content__section project-content__section--dark">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <img src={order} alt="Order" className='project-content__image' />
          </div>
        </div>
      </section>
      <section className="project-content__section project-content__section--dark">
        <h2 className='project-content__line project-content__line--white'>Burger Project — Burger Project — Burger Project — Burger Project</h2>
      </section>
      <section className="project-content__section project-content__section--dark">
        <div className="project-content__image-container">
          <video src={homeVideo} autoPlay loop className="project-content__image"></video>
        </div>
      </section>
      <section className="project-content__section project-content__section--light">
        <div className="project-content__phones">
          <img draggable={false} src={mobile1} alt='mobile burger 1' />
          <img draggable={false} src={mobile2} alt='mobile burger 1' />
          <img draggable={false} src={mobile3} alt='mobile burger 1' />
        </div>
      </section>
      <section className="project-content__section project-content__section--light">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <video autoPlay loop className='project-content__image' src={buildingVideo}></video>
          </div>
        </div>
      </section>
      <section className="project-content__section project-content__section--light">
        <div className="project-content__next-project project-content__next-project--black">
          <p><span><span>See</span></span></p>
          <HighLightText type='black' to='/work'>More projects</HighLightText>
        </div>
      </section>
    </div>
  )
}

export default Content