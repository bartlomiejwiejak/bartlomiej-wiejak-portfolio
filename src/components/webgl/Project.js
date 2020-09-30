import React, { useRef, useEffect, } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import gsap from 'gsap';

import uniforms from './shaders/uniforms';
import fragment from './shaders/fragment';
import vertex from './shaders/vertex';
import { toLight } from '../../functions/handleBackground';


const clock = new THREE.Clock();

const Project = ({ texture, index, loaded }) => {
  const ref = useRef()
  const uniformsRef = useRef({ ...uniforms, u_text0: { value: new THREE.TextureLoader().load(texture) } })

  useFrame(() => {
    uniformsRef.current.u_time.value = clock.getElapsedTime() / 4;
  })

  useEffect(() => {
    if (!loaded) return;
    const timeout = toLight(1000);
    gsap.to(ref.current.position, 3, { y: -index * 20, delay: timeout / 1000, ease: 'power3.out' })
  }, [index, loaded])

  return (
    <mesh
      ref={ref}
      position={[0, 80 - index * 20, 0]}
    >
      <planeBufferGeometry attach='geometry' args={[16, 8, 60, 60]} />
      <shaderMaterial
        uniforms={uniformsRef.current}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  )
}

export default Project;