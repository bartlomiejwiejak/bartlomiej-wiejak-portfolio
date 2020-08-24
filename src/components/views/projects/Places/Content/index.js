import React from 'react'

import mobile1 from '../../../../../assets/projects/places/user-profile-mobile.bmp';
import mobile2 from '../../../../../assets/projects/places/mobile-posts.bmp';
import mobile3 from '../../../../../assets/projects/places/mobile-users.bmp';
import desktopUsers from '../../../../../assets/projects/places/desktop-users.bmp';
import HighLightText from '../../../../shared/HighlightText';
import homeDesktop from '../../../../../assets/projects/places/home-desktop.bmp';
import homeMobile from '../../../../../assets/projects/places/home-mobile.bmp';
import userProfile from '../../../../../assets/projects/places/user-profile.bmp';
import homeVideo from '../../../../../assets/projects/places/home-video.mp4';
import Info from './Info';

function Content() {
  return (
    <div className='project-content'>
      <Info />
      <div className="project-content__section project-content__section--light">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <img draggable={false} className='project-content__image' alt='places-home-desktop' src={homeDesktop} />
            <img draggable={false} src={homeMobile} className='project-content__image__mobile' alt='places-home-mobile' />
          </div>
        </div>
      </div>
      <div className="project-content__section project-content__section--light">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <img draggable={false} src={userProfile} alt="Order" className='project-content__image' />
          </div>
        </div>
      </div>
      <div className="project-content__section project-content__section--light">
        <h2 className='project-content__line project-content__line--black'>Places App — Places App — Places App — Places App</h2>
      </div>
      <div className="project-content__section project-content__section--light">
        <div className="project-content__image-container">
          <video src={homeVideo} autoPlay loop className="project-content__image"></video>
        </div>
      </div>
      <div className="project-content__section project-content__section--dark">
        <div className="project-content__phones">
          <img draggable={false} src={mobile1} alt='mobile burger 1' />
          <img draggable={false} src={mobile2} alt='mobile burger 1' />
          <img draggable={false} src={mobile3} alt='mobile burger 1' />
        </div>
      </div>
      <div className="project-content__section project-content__section--dark">
        <div className='project-content__image-wrapper'>
          <div className="project-content__image-container">
            <img className='project-content__image' alt='desktop-users' src={desktopUsers} />
          </div>
        </div>
      </div>
      <div className="project-content__section project-content__section--dark">
        <div className="project-content__next-project project-content__next-project--white">
          <p><span><span>See</span></span></p>
          <HighLightText type='white' to='/work' >More Projects</HighLightText>
        </div>
      </div>
    </div>
  )
}

export default Content