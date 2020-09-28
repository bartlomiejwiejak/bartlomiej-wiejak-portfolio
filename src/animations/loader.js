import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.50.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');

export const loading = (callback) => {
  gsap.to('.loader span', 1.5, { y: 0, ease: 'power2.out' })
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  const width = window.innerWidth / 2;
  const spike1 = (Math.random() * 0.3 + .2) * width;
  const spike2 = spike1 + (Math.random() * 0.1 + .2) * width;
  const spike3 = width;

  document.querySelectorAll('.loader__loading-text span span').forEach((span, id) => {
    gsap.to(span, .2, { y: '-10%', yoyo: true, repeat: 1, delay: id * 0.10 + 1.4 })
  })

  let interval;

  setTimeout(() => {
    document.querySelectorAll('.loader__loading-text span span').forEach((span, id) => {
      gsap.to(span, .2, { y: '-10%', yoyo: true, repeat: 1, delay: id * 0.10 })
    })
    interval = setInterval(() => {
      document.querySelectorAll('.loader__loading-text span span').forEach((span, id) => {
        gsap.to(span, .2, { y: '-10%', yoyo: true, repeat: 1, delay: id * 0.10 })
      })
    }, 900)
  }, 2200)

  tl.to('.loader__loading-left, .loader__loading-right', .4, { delay: 1.5, width: `${spike1}px` })
    .to('.loader__loading-left, .loader__loading-right', .7, { delay: .3, width: `${spike2}px` })
    .to('.loader__loading-left, .loader__loading-right', .5, {
      delay: .4, width: `${spike3}px`, onComplete: () => {
        callback();
        clearInterval(interval);
      }
    })
}
export const loadingComplete = (callback) => {
  const tl = gsap.timeline({ defaults: { ease: 'custom' } })
  tl.to('.loader span', 1.5, { y: '100%', ease: 'power2.out' })
    .to('.loader__loading-left, .loader__loading-right', .5, { autoAlpha: 0, delay: -1 })
    .to('.loader__overlay', 1, { height: '50vh', onComplete: callback })
}