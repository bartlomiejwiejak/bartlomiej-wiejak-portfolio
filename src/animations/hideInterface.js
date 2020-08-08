import gsap from 'gsap';

export default function () {
  gsap.to('.navigation__item .button', 1.5, { y: '100%', ease: 'power2.out', delay: .2 });
}