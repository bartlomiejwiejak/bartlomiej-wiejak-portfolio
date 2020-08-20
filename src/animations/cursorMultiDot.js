import gsap from 'gsap';

export default () => {
  gsap.to('.cursor__dot', .25, { y: 32.5 })
  gsap.to('.cursor__dot--inner', .25, { y: -32.5 })
}