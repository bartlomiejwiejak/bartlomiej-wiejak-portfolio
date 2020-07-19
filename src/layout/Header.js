import React from 'react';
import Button from '../components/Button';

const Header = () => {
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
