import gsap from 'gsap';

export default function () {
  gsap.to('.contact__item .button', 1, { y: '100%', ease: 'power2.out', delay: .2 });
  gsap.to('.navigation__item .button', 1, { y: '100%', ease: 'power2.out', delay: .2 });
}