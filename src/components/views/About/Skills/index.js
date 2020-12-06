import React from 'react'

import react from '../../../../assets/about/technologies/react.png';
import js from '../../../../assets/about/technologies/js.png';
import gsapLogo from '../../../../assets/about/technologies/gsap.png';
import redux from '../../../../assets/about/technologies/redux.png';
import firebase from '../../../../assets/about/technologies/firebase.png';
import git from '../../../../assets/about/technologies/git.png';
import node from '../../../../assets/about/technologies/node.png';
import sass from '../../../../assets/about/technologies/sass.png';
import webpack from '../../../../assets/about/technologies/webpack.png';
import mongo from '../../../../assets/about/technologies/mongo.png';
import css from '../../../../assets/about/technologies/css.png';
import html from '../../../../assets/about/technologies/html.png';
import Skill from './Skill';
import webgl from '../../../../assets/about/technologies/webgl.png';
import opengl from '../../../../assets/about/technologies/opengl.png';
import reactthreefiber from '../../../../assets/about/technologies/react-three-fiber.png';
import Button from '../../../shared/Button';
import Link from '../../../shared/Link';

const Skills = () => {
  return (
    <div className="about__skills">
      <p className="about__skills__heading"><span><span>I'm</span></span><span><span>ambitious</span></span><span><span>and</span></span><span><span>love</span></span><span><span>new</span></span><span><span>challenges.</span></span><span><span>My</span></span><span><span>variety</span></span><span><span>of</span></span><span><span>skills</span></span><span><span>is</span></span><span><span>continuosly</span></span> <span><span>expanding...</span></span></p>
      <div className="about__skills__technologies-wrapper">
        <div className="about__skills__technologies">
          <div className="about__skills__technologies__technology about__skills__technologies__technology--1"><div>Technologies:</div></div>
          <Skill src={html} />
          <Skill src={css} />
          <Skill src={js} infoColor='#d4bc33'>
            <div className='about__skills__technologies__technology__info'>
              <div className="content">
                <h1>JavaScript</h1>
                <span className='row'><span className='line' /><span className='line-content'>ECMAScript ES2015+<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Audio API<i className="fas fa-check"></i></span></span>
              </div>
            </div>
          </Skill>
          <Skill src={react} infoColor='#63dbfb'>
            <div className='about__skills__technologies__technology__info'>
              <div className="content">
                <h1>React</h1>
                <span className='row'><span className='line' /><span className='line-content'>React 16.8 +</span></span>
                <span className='row'><span className='line' /><span className='line-content'>Hooks<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Styled Components<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Context API<i className="fas fa-check"></i></span></span>
              </div>
            </div>
          </Skill>
          <Skill src={webpack} />
          <Skill src={redux} infoColor='#744bbc'>
            <div className='about__skills__technologies__technology__info'>
              <div className="content">
                <h1>Redux</h1>
                <span className='row'><span className='line' /><span className='line-content'>Sagas<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Thunk<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Reselect<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Redux Persist<i className="fas fa-check"></i></span></span>
                <span className='row'><span className='line' /><span className='line-content'>Hooks<i className="fas fa-check"></i></span></span>
              </div>
            </div>
          </Skill>
          <Skill src={git} />
          <Skill src={node} />
          <Skill src={mongo} infoColor='#73b65b'>
            <div className='about__skills__technologies__technology__info'>
              <div className="content">
                <h1>MongoDB</h1>
                <span className='row'><span className='line' /><span className='line-content'>Mongoose<i className="fas fa-check"></i></span></span>
              </div>
            </div>
          </Skill>
          <Skill src={firebase} />
          <Skill src={sass} infoColor='#cc649c'>
            <div className='about__skills__technologies__technology__info'>
              <div className="content">
                <h1>Sass</h1>
                <span className='row'><span className='line' /><span className='line-content'>BEM<i className="fas fa-check"></i></span></span>
              </div>
            </div>
          </Skill>
          <Skill src={gsapLogo} infoColor='#7fb314'>
            <div className='about__skills__technologies__technology__info'>
              <div className="content">
                <h1>GSAP</h1>
                <span className='row'><span className='line' /><span className='line-content'>GSAP member plugins<i className="fas fa-check"></i></span></span>
              </div>
            </div>
          </Skill>
          <Skill src={webgl} />
          <Skill src={reactthreefiber} />
          <Skill src={opengl} />
        </div>
      </div>
      <div className="about__skills__description"><span><span>You</span></span><span><span>can</span></span><span><span>meet</span></span><span><span>some</span></span><span><span>the</span></span><span><span>skills</span></span><span><span>on</span></span><span><span><Button type='brown'><Link to='/work'>portfolio</Link></Button></span></span><span><span>page</span></span><span><span>with</span></span><span><span>some</span></span> <span><span>of</span></span><span><span>the</span></span><span><span>projects</span></span><span><span>I've</span></span><span><span>worked</span></span><span><span>in.</span></span><span><span>I</span></span><span><span>hope</span></span><span><span>you like</span></span><span><span>them.</span></span></div>
    </div>
  )
}

export default Skills;