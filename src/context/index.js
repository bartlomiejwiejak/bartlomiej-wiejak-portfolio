import React, { createContext, useReducer } from 'react';

import reducer from './reducer';
import { initialState } from './reducer';

export const RoutingContext = createContext(null);
export const LoadingContext = createContext(null);

export default ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoadingContext.Provider
      value={{ loadingState: state.loading, dispatch }}>
      <RoutingContext.Provider
        value={{ routingState: state.routing, dispatch }}>
        {children}
      </RoutingContext.Provider>
    </LoadingContext.Provider>
  )
}