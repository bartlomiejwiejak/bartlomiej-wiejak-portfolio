import React from 'react';

import Button from '../../shared/Button';

const Contact = () => {
  return (
    <>
      <div className="contact__item contact__reach">
        <Button href="mailto:hello@bartlomiejwiejak.com" type='white'>Reach Out</Button>
      </div>
      <aside className='contact'>
        <ul className='contact__list'>
          <li className='contact__item'>
            <Button href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-3431941b9' type='white'>LinkedIn</Button>
          </li>
          <li className='contact__item'>
            <Button href='https://github.com/bartlomiejwiejak' type='white'>Github</Button>
          </li>
          <li className='contact__item'>
            <Button href='https://www.facebook.com/bartlomiejwiejak' type='white'>Facebook</Button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Contact;
