export default (e) => {
  const positionX = -(window.innerWidth / 2 - e.clientX) * 0.05;
  const positionY = -(window.innerHeight / 2 - e.clientY) * 0.03;
  const rotateX = -((((window.innerWidth / 2) - e.clientX) / window.innerWidth) * 10);
  const rotateY = ((((window.innerHeight / 2) - e.clientY) / window.innerHeight) * 10);

  document.querySelector('.home__welcome').style.transform = `translate(${positionX}px,${positionY}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
}