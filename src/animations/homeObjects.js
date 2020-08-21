import gsap from 'gsap';

export const listeners = []

export default (e) => {
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