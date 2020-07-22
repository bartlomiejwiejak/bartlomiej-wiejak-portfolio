import gsap from 'gsap';

export default function () {
  gsap.to('.contact__item .button', { y: 0, duration: 1, ease: 'Power2.easeOut' }, .2);
  gsap.to('.switcher', { autoAlpha: 1, duration: .2, ease: 'Power2.easeOut' }, .5);
  gsap.to('.navigation__item .button', { y: 0, duration: 1, ease: 'Power2.easeOut' }, .2);
}