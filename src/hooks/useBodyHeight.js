import { useState, useCallback } from 'react';

const useContentHeight = () => {
  const [bodyHeight, changeBodyHeight] = useState(0)

  const setBodyHeight = useCallback(() => {
    const contentHeight = document.querySelector('.scroll').getBoundingClientRect().height;
    document.body.style.height = `${contentHeight}px`;
    changeBodyHeight(contentHeight)
  }, [])

  return { bodyHeight, setBodyHeight }
}

export default useContentHeight;