import gsap from 'gsap';

export const showInterface = () => {
  gsap.to('.navigation__item .button', 1.5, { y: 0, ease: 'power4.out' });
}
export const hideInterface = () => {
  gsap.to('.navigation__item .button', 1.5, { y: '100%', ease: 'power4.out', delay: .2 });
}