import React from 'react';
import Button from './Button';

const Contact = () => {

  return (
    <div className='contact'>
      <ul className='contact__list'>
        <li className='contact__item'>
          <a href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-4b9a891b3/' target='blank'><Button type='white'>Linkedin</Button></a>
        </li>
        <li className='contact__item'>
          <a href='https://github.com/bartlomiejwiejak' target='blank'><Button type='white'>Github</Button></a>
        </li>
        <li className='contact__item'>
          <Button type='white'>Reach out</Button>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
