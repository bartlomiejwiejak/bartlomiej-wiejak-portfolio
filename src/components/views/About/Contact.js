import React from 'react'

import Button from '../../shared/Button';

function Contact() {
  return (
    <div className="about__contact">
      <ul>
        <h3><span><span>Email</span></span></h3>
        <li><span><span>hello@bartlomiejwiejak.com</span></span></li>
      </ul>
      <ul>
        <h3><span><span>Social</span></span></h3>
        <li><span><span><Button href='https://twitter.com/BartekWiejak' type='black' arrow>Twitter</Button></span></span></li>
        <li><span><span><Button href='https://github.com/bartlomiejwiejak' type='black' arrow>Github</Button></span></span></li>
        <li><span><span><Button href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-4b9a891b3/' type='black' arrow>Linkedin</Button></span></span></li>
      </ul>
    </div>
  )
}

export default Contact
