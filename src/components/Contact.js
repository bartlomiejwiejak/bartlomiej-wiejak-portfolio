import React from 'react';
import Button from './Button';

const Contact = () => {
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
          <Button>Facebook</Button>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
