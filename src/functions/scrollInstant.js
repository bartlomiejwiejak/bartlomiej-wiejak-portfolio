import gsap from 'gsap';

import skewConfig from '../config/skewScrolling';

export default function (top) {
  gsap.set('.scroll', { y: top })
  window.scrollTo({ top: top })
  skewConfig.previous = top;
}