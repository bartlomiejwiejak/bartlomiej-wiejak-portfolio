import gsap from 'gsap';
import isMobile from '../functions/isMobile';

export const scrollbarAppear = () => {
  if (isMobile()) return;
  gsap.to('.scrollbar__thumb', 1, { autoAlpha: 1 })
}
export const scrollbarHide = () => {
  if (isMobile()) return;
  gsap.to('.scrollbar__thumb', 1, { autoAlpha: 0 })
}