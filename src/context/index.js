import React, { createContext, useState } from 'react';

export const RoutingContext = createContext(null);
export const LoadingContext = createContext(null);

export default ({ children }) => {
  const [path, setPath] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [lastProject, setLastProject] = useState(null);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  const [loaded, setIsLoaded] = useState(false);
  const [analyser, setAnalyser] = useState(null);

  return (
    <LoadingContext.Provider
      value={{ loaded, setIsLoaded, analyser, setAnalyser }}>
      <RoutingContext.Provider
        value={{ path, setPath, setAnimating, animating, lastProject, setLastProject, currentScrollIndex, setCurrentScrollIndex }}>
        {children}
      </RoutingContext.Provider>
    </LoadingContext.Provider>
  )
}