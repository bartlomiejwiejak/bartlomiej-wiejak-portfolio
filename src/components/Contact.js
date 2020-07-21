import React, { useEffect } from 'react';
import Button from './Button';
import gsap from 'gsap';

const Contact = () => {

  useEffect(() => {
    gsap.to('.contact__item .button', { y: 0, duration: 1, ease: 'Power2.easeOut' }, '+=.2');
  }, [])

  return (
    <div className='contact'>
      <ul className='contact__list'>
        <li className='contact__item'>
          <Button>Linkedin</Button>
        </li>
        <li className='contact__item'>
          <Button>Github</Button>
        </li>
        <li className='contact__item'>
          <Button>Reach out</Button>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
