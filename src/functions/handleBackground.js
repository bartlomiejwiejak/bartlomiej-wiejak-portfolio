import { turnBackgroundDark, turnBackgroundLight } from '../animations/background';

let isLight = true;
let isAnimating = false;

export const toDark = (time) => {
  let timeout = 0;
  if (isLight) {
    timeout = time;
    if (isAnimating) return timeout;
    turnBackgroundDark();
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
      isLight = false;
    }, time)
  } else {
    document.body.style.overflow = 'auto';
  }
  return timeout;
}
export const toLight = (time) => {

  let timeout = 0;

  if (!isLight) {
    timeout = time;
    if (isAnimating) return timeout;
    turnBackgroundLight();
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
      isLight = true;
    }, time)
  } else {
    document.body.style.overflow = 'auto';
  }
  return timeout;
}