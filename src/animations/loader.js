import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.50.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');


export const loadingStart = () => {
  gsap.set('body', { overflow: 'hidden' })
  gsap.to('.loader__name-box span, .loader__copyright span', 1.5, { y: 0, ease: 'power4.out' })
  gsap.to(`.loader__loading-text .values div:nth-child(1) span, .percent span`, 1.5, { y: '0%', ease: 'power4.out' });
}
const spikes = [];
const loadingCompleteEvent = new Event('loading-complete');

const handleSpike = () => {
  gsap.to('.loader__loading-right, .loader__loading-left', .25, { width: (window.innerWidth / 2) * (spikes[0] / 7) })
  gsap.to(`.loader__loading-text .values div:nth-child(${spikes[0]}) span:nth-child(1)`, .25, { y: '-100%' });
  gsap.to(`.loader__loading-text .values div:nth-child(${spikes[0]}) span:nth-child(2)`, .25, { y: '-100%', delay: .1 });
  gsap.to(`.loader__loading-text .values div:nth-child(${spikes[0] + 1}) span:nth-child(1)`, .25, { y: '0%', delay: .1 });
  gsap.to(`.loader__loading-text .values div:nth-child(${spikes[0] + 1}) span:nth-child(2)`, .25, { y: '0%', delay: .2 });
  setTimeout(() => {
    if (spikes[0] === 7) {
      document.body.dispatchEvent(loadingCompleteEvent);
      return;
    }
    spikes.shift();
    if (spikes.length !== 0) {
      handleSpike();
    }
  }, 650)
}
export const loadingProgress = (spike) => {
  spikes.push(spike);
  if (spikes.length === 1) {
    handleSpike();
  }
}
export const loadingComplete = (callback) => {
  document.body.addEventListener('loading-complete', function () {
    const tl = gsap.timeline({ defaults: { ease: 'custom' } })
    gsap.set('.loader__loading-text .values div:last-child', { backgroundColor: '#191919' })
    tl.to('.loader__name-box span, .loader__copyright span,.loader__loading-text .values div:last-child span, .percent span', 1.5, { y: '115%', ease: 'power4.out' })
      .to('.loader__loading-text', .5, { scale: 0, delay: -.7 })
      .to('.loader__loading-left, .loader__loading-right', .5, { delay: -.7, backgroundColor: '#f5efe1' })
      .to('.loader__overlay', 1, { height: '50vh', onComplete: callback })
  })
}