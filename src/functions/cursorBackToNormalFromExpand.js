export default () => {
  document.querySelector('.cursor__circle').classList.remove('cursor__circle--expand');
  document.querySelector('.cursor__circle').classList.remove('cursor__circle--expand-big');
  document.querySelector('.cursor__dot').classList.remove('cursor__dot--dont-multi')
  document.querySelector('.cursor__dot--inner').classList.remove('cursor__dot--dont-multi')
}