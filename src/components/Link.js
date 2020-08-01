import React, { useContext } from 'react';
import { RoutingContext } from '../context/context';
import { useLocation } from 'react-router-dom';

const Link = ({ children, to }) => {

  const { setPath, setAnimating, animating } = useContext(RoutingContext);
  const location = useLocation();

  function startRedirecting() {
    if (animating || location.pathname === to) return;
    setPath(to);
    setAnimating(true);
  }

  return (
    <div onClick={startRedirecting} style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  );
}

export default Link;
