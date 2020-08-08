import gsap from 'gsap';
import { skewConfig } from '../App';
export default function (top) {
  gsap.set('.scroll', { y: top })
  window.scrollTo({ top: top })
  gsap.set('.scroll', { y: top })           //prevents screen flashing due to request animation frame
  skewConfig.previous = top;
  gsap.set('.scroll', { y: top })
}