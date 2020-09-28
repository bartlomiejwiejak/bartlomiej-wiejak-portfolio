import { turnBackgroundDark, turnBackgroundLight } from '../animations/background';

export const toDark = (time) => {
  let isLight = false;
  if (document.querySelector('.background__light--up').offsetHeight > 0) {
    isLight = true;
  }
  let timeout = 0;
  if (isLight) {
    turnBackgroundDark();
    timeout = time;
  }
  return timeout;
}
export const toLight = (time) => {
  let isDark = false;
  if (document.querySelector('.background__light--up').offsetHeight === 0) {
    isDark = true;
  }
  let timeout = 0;
  if (isDark) {
    turnBackgroundLight();
    timeout = time;
  }
  return timeout;
}