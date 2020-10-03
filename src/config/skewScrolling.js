import isMobile from '../functions/isMobile';

let ease = .05;
let skew = 7.5;
if (isMobile()) {
  ease = 0.125;
  skew = 5;
}
export default {
  ease: ease,
  current: 0,
  previous: 0,
  rounded: 0,
  skew: skew
}