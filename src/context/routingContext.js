import React, { createContext, useState } from 'react';

export const RoutingContext = createContext(null);

export default ({ children }) => {
  const [path, setPath] = useState('/');
  const [animating, setAnimating] = useState(false);

  return (
    <RoutingContext.Provider
      value={{ path: path, setPath: setPath, setAnimating: setAnimating, animating: animating }}>
      {children}
    </RoutingContext.Provider>
  )
}