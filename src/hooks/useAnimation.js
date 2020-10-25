import { useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import isMobile from '../functions/isMobile';
import { cursorHide, cursorBackToNormal } from '../animations/cursor';
import { hideInterface, showInterface } from '../animations/interface';
import { RoutingContext, LoadingContext } from '../context';
import { homeEnter, homeLeave, homeMoveHeader } from '../animations/home';
import { aboutEnter, moveLines, aboutLeave } from '../animations/about';

const useAnimation = (type) => {

  const { routingState, dispatch } = useContext(RoutingContext);
  const { loadingState } = useContext(LoadingContext);
  const history = useHistory();

  const animationEnd = useCallback(() => {
    dispatch({ type: 'SET_ANIMATING', payload: false })
    history.push(routingState.path)
  }, [history, routingState.path, dispatch])

  useEffect(() => {
    if (!routingState.animating) return;
    cursorHide();
    hideInterface();
    switch (type) {
      case 'HOME':
        homeLeave(animationEnd);
        break;
      case 'ABOUT':
        aboutLeave(animationEnd);
        break;
      default: return;
    }

  }, [routingState.animating, type, animationEnd])

  useEffect(() => {
    if (!loadingState.isLoaded) return;
    let listener;
    let intervals;
    const showInterfaceElements = () => {
      showInterface();
      cursorBackToNormal();
    }
    switch (type) {
      case 'HOME':
        homeEnter(showInterfaceElements);
        if (!isMobile()) {
          document.addEventListener('mousemove', homeMoveHeader);
          listener = homeMoveHeader;
        }
        break;
      case 'ABOUT':
        intervals = aboutEnter(showInterfaceElements, () => {
          document.addEventListener('mousemove', moveLines);
          listener = moveLines;
        });
        break;
      default: return;
    }
    return () => {
      if (intervals) {
        clearInterval(intervals[0])
      }
      document.removeEventListener('mousemove', listener)
    }
  }, [loadingState.isLoaded, type])
}

export default useAnimation;