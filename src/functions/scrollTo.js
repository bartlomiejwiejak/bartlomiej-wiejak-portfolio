export default function (offset, callback) {
  const fixedOffset = offset.toFixed(),
    onScroll = function () {
      if (window.pageYOffset.toFixed() === fixedOffset) {
        window.removeEventListener('scroll', onScroll)
        callback()
      }
    }

  window.addEventListener('scroll', onScroll)
  onScroll()
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  })
}