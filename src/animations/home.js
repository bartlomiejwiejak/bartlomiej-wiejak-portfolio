import gsap from 'gsap';

import isMobile from '../functions/isMobile';
import { turnBackgroundDark } from './background';

export const homeEnter = () => {
  let isLight = false;
  if (document.querySelector('.background__light--up').offsetHeight > 0) {
    isLight = true;
  }
  let timeout = 0;
  if (isLight) {
    turnBackgroundDark();
    timeout = 1000;
  }
  setTimeout(() => {
    if (!isMobile()) {
      gsap.to('.light', 1, { scale: .5, delay: .5, ease: 'power2.out' })
    } else {
      gsap.to('.light', 1, { scale: .5, ease: 'power2.out', delay: 1.5 })
    }
    gsap.to('.contact__item .button', 1.5, { y: 0, ease: 'power2.out' });
    gsap.to('.player__content i', 1.5, { y: 0, autoAlpha: 1, ease: 'power2.out' })
    gsap.to('.player__song span', 1.5, { y: 0, autoAlpha: 1, ease: 'power2.out' })
    gsap.to('.home > .home__welcome >  span span', 1.2, { y: 0, stagger: .1, ease: 'power2.out', opacity: 1 });
    gsap.to('.home .home__welcome--shadow span span', 1.2, { y: 0, stagger: .1, ease: 'power2.out', opacity: 1 });
  }, timeout)
}
export const homeLeave = () => {
  gsap.to('.light', .5, { opacity: 0 })
  gsap.to('.player__content i', 1, { y: '100%', autoAlpha: 0 })
  gsap.to('.player__song span', 1, { y: '100%', autoAlpha: 0 })
  gsap.to('.contact__item .button', 1, { y: '100%', ease: 'power2.out', delay: .2 });
  gsap.to('.home > .home__welcome > span span', .5, {
    color: 'transparent'
  })
  gsap.to('.home > .home__welcome > span span', .5, { delay: .6, y: '110%' })
}
export const homeMoveHeader = e => {
  const positionX = -(window.innerWidth / 2 - e.clientX) * 0.05;
  const positionY = -(window.innerHeight / 2 - e.clientY) * 0.03;
  const rotateX = -((((window.innerWidth / 2) - e.clientX) / window.innerWidth) * 10);
  const rotateY = ((((window.innerHeight / 2) - e.clientY) / window.innerHeight) * 10);

  gsap.to('.home > .home__welcome', .2, { rotateY: `${rotateX}deg`, rotateX: `${rotateY}deg`, x: positionX, y: positionY })

  document.querySelectorAll('.home__welcome--shadow > span').forEach((el, i) => {
    const span = document.querySelector(`.home > .home__welcome > span:nth-of-type(${i + 1})`)
    const spanRect = span.getBoundingClientRect();
    const spanX = (spanRect.x + spanRect.width / 2 - e.clientX) * 0.1;
    const spanY = (spanRect.y + spanRect.height / 2 - e.clientY) * 0.2;

    gsap.to(el, .2, { x: spanX, y: spanY, scaleX: 1 + Math.abs(spanX / spanRect.width), scaleY: 1 + Math.abs(spanY / spanRect.height) })
  })
}