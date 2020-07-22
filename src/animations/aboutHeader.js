import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export function moveFirstLine(e) {
  const transformX = (window.innerWidth / 2 - e.clientX);
  const transformY = (window.innerHeight / 2 - e.clientY);
  document.querySelector('.about__line--1 span').style.transform = `translate(${transformX * 0.07}px,${transformY * 0.03}px)`;
  document.querySelector('.about__line--2 span').style.transform = `translate(${transformX * 0.05}px,${transformY * 0.02}px)`;
  document.querySelector('.about__line--3 span').style.transform = `translate(${transformX * 0.02}px,${transformY * 0.01}px)`;
}

export default function () {

  document.addEventListener('mousemove', moveFirstLine)
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.about__line--1, .about__line--3', {
    x: '50%', scrollTrigger: {
      trigger: '.about__heading',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
  gsap.to('.about__line--2', {
    x: '-50%', scrollTrigger: {
      trigger: '.about__heading',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
}