import React, { useContext, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';

import Project from './Project';
import { LoadingContext, RoutingContext } from '../../context';
import projectsData from '../../data/projects';

const WebGLRenderer = () => {
  const { loaded } = useContext(LoadingContext);
  const { currentScrollIndex, path, setCurrentScrollIndex } = useContext(RoutingContext);

  useEffect(() => {
    return () => {
      setCurrentScrollIndex(0);
    }
  }, [setCurrentScrollIndex])

  return (
    <div className='WebGLRenderer'>
      <Canvas>
        {projectsData.map(({ index, texture, url }) => <Project key={index} index={index} texture={texture} url={url} loaded={loaded} currentScrollIndex={currentScrollIndex} path={path} />)}
      </Canvas>
    </div>
  )
}

export default WebGLRenderer;