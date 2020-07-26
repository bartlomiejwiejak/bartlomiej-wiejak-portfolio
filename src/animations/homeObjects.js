import gsap from 'gsap';
export default (e) => {
  const positionX = -(window.innerWidth / 2 - e.clientX) * 0.05;
  const positionY = -(window.innerHeight / 2 - e.clientY) * 0.03;
  const rotateX = -((((window.innerWidth / 2) - e.clientX) / window.innerWidth) * 10);
  const rotateY = ((((window.innerHeight / 2) - e.clientY) / window.innerHeight) * 10);

  gsap.to('.home__welcome', .2, { rotateY: `${rotateX}deg`, rotateX: `${rotateY}deg`, x: `${positionX}px`, y: `${positionY}px` })
}