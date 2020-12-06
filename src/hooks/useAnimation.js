import { useEffect, useContext, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { cursorHide, cursorBackToNormal } from '../animations/cursor';
import { hideInterface, showInterface } from '../animations/interface';
import { RoutingContext, LoadingContext } from '../context';
import { homeEnter, homeLeave, homeMoveHeader } from '../animations/home';
import { aboutEnter, moveLines, aboutLeave } from '../animations/about';

const useAnimation = (type) => {

  const { routingState, dispatch } = useContext(RoutingContext);
  const { loadingState } = useContext(LoadingContext);
  const interval = useRef(null);
  const cleanup = useRef(null);
  const listener = useRef(null);
  const history = useHistory();

  const animationEnd = useCallback(() => {
    dispatch({ type: 'SET_ANIMATING', payload: false })
    history.push(routingState.path)
  }, [history, routingState.path, dispatch])

  const clearEvents = useCallback(() => {
    if (listener.current) {
      document.removeEventListener('mousemove', listener.current);
    }
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (typeof cleanup.current === 'function') {
      cleanup.current();
    }
  }, [])

  useEffect(() => {
    if (!routingState.animating) return;
    cursorHide();
    hideInterface();

    switch (type) {
      case 'HOME':
        homeLeave(animationEnd, clearEvents);
        break;
      case 'ABOUT':
        aboutLeave(animationEnd, clearEvents);
        break;
      default: return;
    }

  }, [routingState.animating, type, animationEnd, clearEvents])

  useEffect(() => {
    if (!loadingState.isLoaded) return;
    const showInterfaceElements = () => {
      showInterface();
      cursorBackToNormal();
    }
    switch (type) {
      case 'HOME':
        homeEnter(showInterfaceElements, () => {
          document.addEventListener('mousemove', homeMoveHeader);
          listener.current = homeMoveHeader;
        });
        break;
      case 'ABOUT':
        cleanup.current = aboutEnter(showInterfaceElements, () => {
          document.addEventListener('mousemove', moveLines);
          listener.current = moveLines;
        });
        break;
      default: return;
    }
    return () => {
      clearEvents()
    }
  }, [loadingState.isLoaded, type, clearEvents])
}

export default useAnimation;