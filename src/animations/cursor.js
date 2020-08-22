import gsap from 'gsap';

export const cursorBackToNormal = () => {
  gsap.to('.cursor__circle', .3, { scale: 1 })
}
export const cursorExpand = () => {
  gsap.to('.cursor__circle', .3, { scale: 1.5 })
}
export const cursorExpandBig = () => {
  gsap.to('.cursor__circle', .3, { scale: 2 })
}
export const cursorMultiDot = () => {
  gsap.to('.cursor__dot', .25, { y: 32.5 })
  gsap.to('.cursor__dot--inner', .25, { y: -32.5 })
}