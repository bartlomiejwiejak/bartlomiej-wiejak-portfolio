import React, { useEffect } from 'react';
import photo from '../assets/photo.jpg';
import circle from '../assets/circle.png';
import react from '../assets/technologies/react.png';
import js from '../assets/technologies/js.png';
import { ReactComponent as Gsap } from '../assets/technologies/gsap.svg';
import redux from '../assets/technologies/redux.png';
import html5 from '../assets/technologies/html5.png';
import css3 from '../assets/technologies/css3.png';
import node from '../assets/technologies/node.png';
import sass from '../assets/technologies/sass.png';
import webpack from '../assets/technologies/webpack.png';
import mongo from '../assets/technologies/mongo.png';
import threejs from '../assets/technologies/threejs.webp';
import Button from '../components/Button';
import gsap from 'gsap';

const About = () => {

  useEffect(() => {

  }, [])

  return (
    <div className='about'>
      <div className="background"></div>
      <h1 className='about__heading'>
        <p className='about__line about__line--1'>
          <span>INTERACTIVE</span>
        </p>
        <p className='about__line about__line--2'>
          <span>& CREATIVE</span>
        </p>
        <p className='about__line about__line--3'>
          <span>DEVELOPER</span>
        </p>
      </h1>
      <div className="about__description">
        <div className="about__description__heading">Hey, I'm Bartłomiej Wiejak a creative developer.</div>
        <p className="about__description__text">
          I enjoy building interactive, heavy javascript application with slick animations. I mostly work with react. Passionate in programming since wrote first program "Towers of Hanoi" during studies. If I'm not programming, I spend time active.
          <div className="about__circle">
            <img draggable={false} src={circle} alt="Circle" className="about__circle__img" />
          </div>
        </p>
        <div className="about__description__img-container">
          <img draggable={false} src={photo} alt="Bartlomiej Wiejak" className="about__description__img" />
        </div>

      </div>
      <div className="about__skills">
        <p className="about__skills__heading">I'm ambitious and love new challenges. My variety of skills is continuously expanding.</p>
        <div className="about__skills__technologies">
          <div className="about__skills__technologies__technology about__skills__technologies__technology--1"><div>Technologies:</div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--2"><div>
            <img src={react} alt="react" />
          </div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--3"><div>
            <img src={js} alt="react" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--4"><div>
            <Gsap /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--5"><div><img src={redux} alt="redux" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--6"><div><img src={html5} alt="html5" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--7"><div><img src={css3} alt="css3" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--8"><div><img src={node} alt="node" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--9"><div><img src={sass} alt="sass" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--10"><div><img src={webpack} alt="webpack" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--11"><div><img src={mongo} alt="mongo" /></div></div>
          <div className="about__skills__technologies__technology about__skills__technologies__technology--12"><div><img src={threejs} alt="threejs" /></div></div></div>
        <div className="about__contact">
          <ul>
            <li>Email</li>
            <li>hello@wiejak.com</li>
          </ul>
          <ul>
            <li>Social</li>
            <li><Button>Facebook</Button></li>
            <li><Button>Github</Button></li>
            <li><Button>Linkedin</Button></li>
          </ul>
        </div>
      </div>
      <footer className='about__footer'>
        <div className="about__footer__copyright">© 2020</div>
        <div className="about__footer__author">by <Button>WieJak.</Button></div>
      </footer>
    </div>
  );
}

export default About;