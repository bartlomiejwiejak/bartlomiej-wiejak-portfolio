import { turnBackgroundDark, turnBackgroundLight } from '../animations/background';

let isLight = true;

export const toDark = (time) => {
  let timeout = 0;
  if (isLight) {
    turnBackgroundDark();
    isLight = false;
    timeout = time;
  } else {
    document.body.style.overflow = 'auto';
  }
  return timeout;
}
export const toLight = (time) => {

  let timeout = 0;
  if (!isLight) {
    turnBackgroundLight();
    isLight = true;
    timeout = time;
  } else {
    document.body.style.overflow = 'auto';
  }
  return timeout;
}