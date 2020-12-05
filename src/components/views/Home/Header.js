import React from 'react'

import HighLightText from '../../shared/HighlightText';

function Header({ shadow, children }) {

  return (
    <div className={`home__welcome ${shadow ? 'home__welcome--shadow' : ''}`}>
      {children}
      <span>
        <span>Hey</span>
      </span>
      <span>
        <span>there.</span>
      </span>
      <span>
        <span>My</span>
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
      <HighLightText arrow type={shadow ? 'dark' : 'white'} to='/about'>Wiejak.</HighLightText>
      <span>
        <span>I'm</span>
      </span>
      <span>
        <span>a</span>
      </span>
      <span>
        <span>creative</span>
      </span>
      <span>
        <span>developer</span>
      </span>
      <span>
        <span>focused</span>
      </span>
      <span>
        <span>on</span>
      </span>
      <span>
        <span>crafting</span>
      </span>
      <span>
        <span>unique</span>
      </span>
      <span>
        <span>and</span>
      </span>
      <span>
        <span>memorable </span>
      </span>
      <span>
        <span>digital</span>
      </span>
      <HighLightText type={shadow ? 'dark' : 'white'} arrow to='/work'>experiences.</HighLightText>
    </div>
  )
}

export default Header;