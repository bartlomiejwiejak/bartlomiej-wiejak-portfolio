import React from 'react';

import Header from './Header';
import Description from './Description';
import Circle from './Circle';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import useAnimation from '../../../hooks/useAnimation';

const About = () => {

  useAnimation('ABOUT');

  return (
    <div className='about'>
      <Header />
      <Description />
      <Circle />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default About;