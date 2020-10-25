import React, { useContext, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { useLocation } from 'react-router';

import Project from './Project';
import { LoadingContext, RoutingContext } from '../../context';
import projectsData from '../../data/projects';

const WebGLRenderer = () => {
  const { loadingState } = useContext(LoadingContext);
  const { routingState, dispatch } = useContext(RoutingContext);
  const location = useLocation();

  useEffect(() => {
    return () => {
      dispatch({ type: 'SET_CURRENT_SCROLL_INDEX', payload: null });
    }
  }, [dispatch])

  return (
    <div className='WebGLRenderer'>
      <Canvas
        pixelRatio={window.devicePixelRatio}
      >
        {projectsData.map(({ index, texture, url }) => <Project key={index} index={index} wave={routingState.wave} texture={texture} url={url} isLoaded={loadingState.isLoaded} currentScrollIndex={routingState.currentScrollIndex} path={routingState.path} pathname={location.pathname} lastProject={routingState.lastProject} animating={routingState.animating} />)}
      </Canvas>
    </div>
  )
}

export default WebGLRenderer;