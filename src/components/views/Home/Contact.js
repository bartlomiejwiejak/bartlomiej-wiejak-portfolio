import React from 'react';

import Button from '../../shared/Button';

const Contact = () => {
  return (
    <>
      <div className="contact__item contact__reach">
        <Button type='white'>Reach Out</Button>
      </div>
      <div className='contact'>
        <ul className='contact__list'>
          <li className='contact__item'>
            <Button href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-4b9a891b3/' type='white'>Linkedin</Button>
          </li>
          <li className='contact__item'>
            <Button href='https://github.com/bartlomiejwiejak' type='white'>Github</Button>
          </li>
          <li className='contact__item'>
            <Button href='https://twitter.com/BartekWiejak' type='white'>Twitter</Button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
