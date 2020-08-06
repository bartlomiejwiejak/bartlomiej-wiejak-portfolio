import React from 'react';
import Button from '../components/Button';
import cursorExpandBig from '../animations/cursorExpandBig';
import Link from '../components/Link';

const Header = () => {

  return (
    <header className='header'>
      <ul className='navigation'>
        <li onMouseOver={cursorExpandBig} className='navigation__item'>
          <Button type='white'><Link to='/'>Bartłomiej Wiejak—</Link></Button>
        </li>
        <li className='navigation__item'>
          <Button type='white'><Link to='/work'>Work</Link></Button>
        </li>
        <li className='navigation__item'>
          <Button type='white'><Link to='/about'>About</Link></Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
