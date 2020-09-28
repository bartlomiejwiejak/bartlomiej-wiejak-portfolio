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

const Skills = () => {
  return (
    <div className="about__skills">
      <p className="about__skills__heading"><span><span>I'm</span></span><span><span>ambitious</span></span><span><span>and</span></span><span><span>love</span></span><span><span>new</span></span><span><span>challenges.</span></span><span><span>My</span></span><span><span>variety</span></span><span><span>of</span></span><span><span>skills</span></span><span><span>is</span></span><span><span>continuosly</span></span> <span><span>expanding...</span></span></p>
      <div className="about__skills__technologies-wrapper">
        <div className="about__skills__technologies">
          <div className="about__skills__technologies__technology about__skills__technologies__technology--1"><div>Technologies:</div></div>
          <Skill src={html} />
          <Skill src={css} />
          <Skill src={js} />
          <Skill src={react} />
          <Skill src={redux} />
          <Skill src={webpack} />
          <Skill src={sass} />
          <Skill src={node} />
          <Skill src={mongo} />
          <Skill src={firebase} />
          <Skill src={git} />
          <Skill src={gsapLogo} />
          <Skill src={webgl} />
          <Skill src={reactthreefiber} />
          <Skill src={opengl} />

        </div>
      </div>
    </div>
  )
}

export default Skills;