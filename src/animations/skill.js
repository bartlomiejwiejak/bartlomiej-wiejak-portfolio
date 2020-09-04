import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function (top, delay, element) {
  gsap.to(`${element} div`, .5, {
    scrollTrigger: {
      trigger: element,
      start: `${top} bottom`
    },
    y: 0,
    x: 0,
    ease: 'power2.out',
    delay: delay,
    onComplete: () => gsap.to(`${element} img`, .5, { opacity: 1, y: 0, x: 0 })
  })
}