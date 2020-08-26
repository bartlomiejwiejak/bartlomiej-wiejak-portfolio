import gsap from 'gsap';

export const scrollbarAppear = () => {
  gsap.to('.scrollbar__thumb', 1.5, { autoAlpha: 1 })
}
export const scrollbarHide = () => {
  gsap.to('.scrollbar__thumb', 1.5, { autoAlpha: 0 })
}