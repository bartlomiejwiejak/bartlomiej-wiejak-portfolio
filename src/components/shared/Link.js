import React, { useContext } from 'react';

import { RoutingContext } from '../../context';
import { useLocation } from 'react-router-dom';

const Link = ({ children, to }) => {

  const { routingState, dispatch } = useContext(RoutingContext);
  const location = useLocation();

  function startRedirecting() {
    if (routingState.animating || location.pathname === to) return;
    dispatch({ type: 'SET_PATH', payload: to });
    dispatch({ type: 'SET_ANIMATING', payload: true });
  }

  return (
    <div onClick={startRedirecting} style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  );
}

export default Link;
