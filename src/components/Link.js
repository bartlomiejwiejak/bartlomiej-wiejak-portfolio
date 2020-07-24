import React, { useContext } from 'react';
import { RoutingContext } from '../context/routingContext';

const Link = ({ children, to }) => {

  const { setPath, setAnimating, animating } = useContext(RoutingContext);

  function startRedirecting() {
    if (animating) return;
    setPath(to);
    setAnimating(true);
  }

  return (
    <div onClick={startRedirecting} className='link'>
      {children}
    </div>
  );
}

export default Link;
