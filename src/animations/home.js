import gsap from 'gsap';

import { toDark } from '../functions/handleBackground';
import isMobile from '../functions/isMobile';

export const homeEnter = (callafter) => {
  const timeout = toDark(1000);
  setTimeout(() => {
    callafter();
    if (!isMobile()) {
      gsap.to('.light', 1.5, { autoAlpha: 1, ease: 'power2.out' })
      gsap.to('.home .home__welcome--shadow span span', 1.2, { y: 0, stagger: .15, ease: 'power4.out', opacity: 1 });
    }

    gsap.to('.home > .home__welcome >  span span', 1.2, { y: 0, stagger: .15, ease: 'power4.out', opacity: 1 });
    gsap.to('.contact__item .button', 1.5, { y: 0, ease: 'power4.out' });
    gsap.to('.player__content i', 1.5, { y: 0, autoAlpha: 1, ease: 'power4.out' })
    gsap.to('.player__song span', 1.5, { y: 0, autoAlpha: 1, ease: 'power4.out' })
  }, timeout)
}
export const homeLeave = (callback) => {
  if (!isMobile()) {
    gsap.to('.light', 1, { opacity: 0, ease: 'power2.out' })
    gsap.to('.home .home__welcome--shadow', .15, { delay: 2, autoAlpha: 0 })
  }
  gsap.to('.player__content i', 1, { y: '100%', autoAlpha: 0, ease: 'power4.out' })
  gsap.to('.player__song span', 1, { y: '100%', autoAlpha: 0, ease: 'power4.out' })
  gsap.to('.contact__item .button', 1, { y: '100%', ease: 'power4.out', delay: .2 });

  gsap.to('.home > .home__welcome > span span', .75, {
    color: 'transparent', ease: 'power2.out'
  })
  gsap.to('.home > .home__welcome > span span', 1, { delay: 1, y: '115%', ease: 'power4.out' })
  setTimeout(callback, 2200);
}
export const homeMoveHeader = e => {
  const positionX = -(window.innerWidth / 2 - e.clientX) * 0.05;
  const positionY = -(window.innerHeight / 2 - e.clientY) * 0.03;
  const rotateX = -((((window.innerWidth / 2) - e.clientX) / window.innerWidth) * 10);
  const rotateY = ((((window.innerHeight / 2) - e.clientY) / window.innerHeight) * 10);

  gsap.to('.home > .home__welcome', .2, { rotateY: `${rotateX}deg`, rotateX: `${rotateY}deg`, x: positionX, y: positionY })
  gsap.to('.background__dark', .2, { rotateY: `${rotateX}deg`, rotateX: `${rotateY}deg` })

  document.querySelectorAll('.home__welcome--shadow > span').forEach((el, i) => {
    const span = document.querySelector(`.home > .home__welcome > span:nth-of-type(${i + 1})`)
    const spanRect = span.getBoundingClientRect();
    const spanX = (spanRect.x + spanRect.width / 2 - e.clientX) * 0.1;
    const spanY = (spanRect.y + spanRect.height / 2 - e.clientY) * 0.2;

    gsap.to(el, .2, { x: spanX, y: spanY, scaleX: 1 + Math.abs(spanX / spanRect.width), scaleY: 1 + Math.abs(spanY / spanRect.height) })
  })
}