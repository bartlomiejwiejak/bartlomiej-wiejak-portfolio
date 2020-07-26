import gsap from 'gsap';

export default function () {
  gsap.to('.contact__item .button', 1, { y: 0, ease: 'Power2.easeOut' });
  gsap.to('.navigation__item .button', 1, { y: 0, ease: 'Power2.easeOut' });
}