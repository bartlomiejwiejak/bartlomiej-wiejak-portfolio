import skewConfig from '../config/skewScrolling';

export default function (offset, callback) {
  window.scrollTo({
    top: offset
  })
  function frame() {
    if (skewConfig.previous - offset < 100) {
      callback();
    } else requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}