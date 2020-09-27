import { useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import isMobile from '../functions/isMobile';
import { cursorHide, cursorBackToNormal } from '../animations/cursor';
import { hideInterface, showInterface } from '../animations/interface';
import { RoutingContext, LoadingContext } from '../context';
import { homeEnter, homeLeave, homeMoveHeader } from '../animations/home';

const useAnimation = (type) => {

  const { animating, setAnimating, path } = useContext(RoutingContext);
  const { loaded } = useContext(LoadingContext);
  const history = useHistory();

  const animationEnd = useCallback(() => {
    setAnimating(false)
    history.push(path)
  }, [history, path, setAnimating])

  useEffect(() => {
    if (!animating) return;
    cursorHide();
    hideInterface();
    switch (type) {
      case 'HOME':
        homeLeave();
        setTimeout(() => {
          animationEnd();
        }, 1200)
        break;
      default: return;
    }

  }, [animating, type, animationEnd])

  useEffect(() => {
    if (!loaded) return;
    let listener;
    showInterface();
    cursorBackToNormal();
    switch (type) {
      case 'HOME':
        homeEnter();
        if (!isMobile()) {
          listener = document.addEventListener('mousemove', homeMoveHeader)
        }
        break;
      default: return;
    }
    return () => {
      document.removeEventListener('mousemove', listener)
    }
  }, [loaded, type])

}

export default useAnimation;