import React from 'react'

import homeDesktop from '../../../../../assets/projects/burger/home-desktop.png';
import homeMobile from '../../../../../assets/projects/burger/home-mobile.png';
import homeVideo from '../../../../../assets/projects/burger/home-video.mp4';
import mobile1 from '../../../../../assets/projects/burger/home-mobile.png';
import mobile2 from '../../../../../assets/projects/burger/builder-mobile.png';
import mobile3 from '../../../../../assets/projects/burger/menu-mobile.png';
import buildingVideo from '../../../../../assets/projects/burger/building-video.mp4';
import homeLoad from '../../../../../assets/projects/burger/home-load.mp4';
import homeLoadMobile from '../../../../../assets/projects/burger/home-load-mobile.mp4';
import sideDrawer from '../../../../../assets/projects/burger/sidedrawer.mp4';
import order from '../../../../../assets/projects/burger/order.png';
import HighLightText from '../../../../shared/HighlightText';
import Info from './Info';

function Content() {
  return (
    <div className='burger__content'>
      <Info />
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
  )
}

export default Content