import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.50.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');

export const turnBackgroundLight = () => {
  gsap.set('.background__light--up,.background__light--down', { zIndex: 1 });
  gsap.set('.background__dark', { zIndex: 0 });
  gsap.to('.background__light--up,.background__light--down', 1, { ease: 'custom', height: '50vh' });
  gsap.set('.background__dark', { x: '100%', delay: 1 });
}
export const turnBackgroundDark = () => {
  gsap.set('.background__light--up,.background__light--down', { zIndex: 0 });
  gsap.set('.background__dark', { zIndex: 1 });
  gsap.to('.background__dark', 1, { ease: 'custom', x: 0 });
  gsap.set('.background__light--up,.background__light--down', { delay: 1, height: 0 });
}