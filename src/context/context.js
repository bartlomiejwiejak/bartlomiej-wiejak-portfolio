import React, { createContext, useState } from 'react';

export const RoutingContext = createContext(null);
export const LoadingContext = createContext(null);

export default ({ children }) => {
  const [path, setPath] = useState('/');
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ loaded: loaded, setIsLoaded: setLoaded }}>
      <RoutingContext.Provider
        value={{ path: path, setPath: setPath, setAnimating: setAnimating, animating: animating }}>
        {children}
      </RoutingContext.Provider>
    </LoadingContext.Provider>
  )
}