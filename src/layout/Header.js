import React, { useEffect } from 'react';
import Button from '../components/Button';
import gsap from 'gsap';

const Header = () => {

  useEffect(() => {
    gsap.to('.navigation__item .button', { y: 0, duration: 1, ease: 'Power2.easeOut' }, '+=.2');
  }, [])

  return (
    <header>
      <ul className='navigation'>
        <li className='navigation__item'>
          <Button>WieJak—</Button>
        </li>
        <li className='navigation__item'>
          <Button>Work</Button>
        </li>
        <li className='navigation__item'>
          <Button>About</Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
