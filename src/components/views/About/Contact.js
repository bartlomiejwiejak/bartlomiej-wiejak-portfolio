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
        <li><span><span><a href='https://twitter.com/BartekWiejak' target='blank'><Button type='black'>Twitter</Button></a></span></span></li>
        <li><span><span><a href='https://github.com/bartlomiejwiejak' target='blank'><Button type='black'>Github</Button></a></span></span></li>
        <li><span><span><a href='https://www.linkedin.com/in/bart%C5%82omiej-wiejak-4b9a891b3/' target='blank'><Button type='black'>Linkedin</Button></a></span></span></li>
      </ul>
    </div>
  )
}

export default Contact
