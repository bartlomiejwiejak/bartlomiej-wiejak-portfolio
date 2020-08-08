import gsap from 'gsap';

export default function () {
  gsap.to('.navigation__item .button', 1.5, { y: 0, ease: 'power2.out' });
}