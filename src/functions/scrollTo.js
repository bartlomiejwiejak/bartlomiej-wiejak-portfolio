import skewConfig from '../config/skewScrolling';

export default function (offset, callback) {
  window.scrollTo({
    top: offset
  })
  function frame() {
    console.log(skewConfig.previous)
    if (skewConfig.previous - offset < 50) {
      callback();
    } else requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}