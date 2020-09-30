import React, { useContext } from 'react';
import { Canvas } from 'react-three-fiber';

import Project from './Project';
import { LoadingContext, RoutingContext } from '../../context';
import projectsData from '../../data/projects';

const WebGLRenderer = () => {
  const { loaded } = useContext(LoadingContext);
  const { currentScrollIndex } = useContext(RoutingContext);
  return (
    <div className='WebGLRenderer'>
      <Canvas>
        {projectsData.map(({ index, texture, url }) => <Project index={index} texture={texture} url={url} loaded={loaded} currentScrollIndex={currentScrollIndex} />)}
      </Canvas>
    </div>
  )
}

export default WebGLRenderer;