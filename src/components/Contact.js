import React from 'react';
import Button from './Button';

const Contact = () => {

  return (
    <div className='contact'>
      <ul className='contact__list'>
        <li className='contact__item'>
          <Button type='white'>Linkedin</Button>
        </li>
        <li className='contact__item'>
          <Button type='white'>Github</Button>
        </li>
        <li className='contact__item'>
          <Button type='white'>Reach out</Button>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
