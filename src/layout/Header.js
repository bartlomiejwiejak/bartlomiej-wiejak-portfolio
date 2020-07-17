import React from 'react';

const Header = () => {
  return (
    <header>
      <ul className='navigation'>
        <li className='navigation__item'>
          <span className='navigation__text'>WieJak—</span>
        </li>
        <li className='navigation__item'>
          <span className='navigation__text'>Work</span>
        </li>
        <li className='navigation__item'>
          <span className='navigation__text'>About</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
