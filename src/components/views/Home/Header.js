import React from 'react'

import HighLightText from '../../shared/HighlightText';

function Header({ shadow, children }) {

  return (
    <div className={`home__welcome ${shadow ? 'home__welcome--shadow' : ''}`}>
      {children}
      <span>
        <span>Hello,</span>
      </span>
      <span>
        <span>my</span>
      </span>
      <span>
        <span>name</span>
      </span>
      <span>
        <span>is</span>
      </span>
      <span>
        <span>Bartłomiej</span>
      </span>
      <HighLightText type={shadow ? 'dark' : 'white'} to='/about'>Wiejak.</HighLightText>
      <span>
        <span>I'm</span>
      </span>
      <span>
        <span>a</span>
      </span>
      <span>
        <span>web</span>
      </span>
      <span>
        <span>developer</span>
      </span>
      <span>
        <span> focussed</span>
      </span>
      <span>
        <span>on</span>
      </span>
      <span>
        <span>creative</span>
      </span>
      <span>
        <span>interactions</span>
      </span>
      <span>
        <span>& </span>
      </span>
      <span>
        <span>animations</span>
      </span>
      <span>
        <span>in</span>
      </span>
      <span>
        <span>my</span>
      </span>
      <HighLightText type={shadow ? 'dark' : 'white'} to='/work'>apps.</HighLightText>
    </div>
  )
}

export default Header;
