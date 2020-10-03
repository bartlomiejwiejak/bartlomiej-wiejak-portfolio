import gsap from 'gsap';
import isMobile from '../functions/isMobile';

export const cursorBackToNormal = () => {
  if (isMobile()) return;
  gsap.to('.cursor__circle', .5, { scale: 1, ease: 'power2.out' })
}
export const cursorExpand = () => {
  if (isMobile()) return;
  gsap.to('.cursor__circle', .5, { scale: 1.7, ease: 'power2.out' })
}
export const cursorExpandBig = () => {
  if (isMobile()) return;
  gsap.to('.cursor__circle', .5, { scale: 2.5, ease: 'power2.out' })
}
export const cursorMultiDot = () => {
  if (isMobile()) return;
  gsap.to('.cursor__dot', .25, { y: 32.5, ease: 'power2.out' })
  gsap.to('.cursor__dot--inner', .25, { y: -32.5, ease: 'power2.out' })
}
export const cursorHide = () => {
  if (isMobile()) return;
  gsap.to('.cursor__circle', .5, { scale: 0, ease: 'power2.out' })
}