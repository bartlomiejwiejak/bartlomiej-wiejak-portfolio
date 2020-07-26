import gsap from 'gsap';

export default function () {
  gsap.to('.contact__item .button', 1, { y: '100%', ease: 'Power2.easeOut', delay: .2 });
  gsap.to('.navigation__item .button', 1, { y: '100%', ease: 'Power2.easeOut', delay: .2 });
}