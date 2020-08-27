import React from 'react'

import Button from '../../shared/Button';
import HighLightText from '../../shared/HighlightText';

function Footer() {
  return (
    <>
      <footer className='about__footer'>
        <div className="about__footer__copyright"><span><span>© 2020</span></span></div>
        <div className="about__footer__author"><span><span>by</span></span><span><span><Button href='https://github.com/bartlomiejwiejak/bartlomiej-wiejak-portfolio' type='black'>Bartłomiej Wiejak.</Button></span></span></div>
      </footer>
      <div className="about__go-to-work">
        <p><span><span>Go to</span></span></p>
        <HighLightText type='black' to='/work'>Work</HighLightText>
      </div>
    </>
  )
}

export default Footer
