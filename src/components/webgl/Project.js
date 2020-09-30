import React, { useRef, useEffect, } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import uniforms from './shaders/uniforms';
import fragment from './shaders/fragment';
import vertex from './shaders/vertex';
import { toLight } from '../../functions/handleBackground';

gsap.registerPlugin(CustomEase)
CustomEase.create('custom', 'M0,0 C0,0 0.094,0.019 0.174,0.058 0.231,0.085 0.24,0.088 0.318,0.15 0.426,0.25 0.627,0.701 0.718,0.836 0.819,0.985 1,1 1,1 ')

const clock = new THREE.Clock();

const Project = ({ texture, index, loaded, currentScrollIndex, path }) => {
  const ref = useRef()
  const uniformsRef = useRef({ ...uniforms, u_text0: { value: new THREE.TextureLoader().load(texture) } })
  const initializedRef = useRef(false);
  const lastScrollIndexRef = useRef(0);
  const leavingWorkRef = useRef(false);

  useFrame(() => {
    uniformsRef.current.u_time.value = clock.getElapsedTime() / 5;
  })

  useEffect(() => {
    if (!loaded) return;
    const timeout = toLight(1000);

    const delay = timeout / 1000;

    gsap.to(ref.current.position, 3.3, { y: -index * 20, delay: delay, ease: 'power3.out' })
    gsap.to(uniformsRef.current.u_waveIntensity, 1.1, { value: 1, delay: delay })
    gsap.to(uniformsRef.current.u_waveIntensity, 2.2, { value: 0.3, delay: delay + 1 })
  }, [index, loaded])

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      return;
    }
    const difference = Math.abs(currentScrollIndex - lastScrollIndexRef.current);
    let time = difference * .9;
    if (path === '/about' || path === '/') {
      if (!leavingWorkRef.current && currentScrollIndex !== 0) {
        leavingWorkRef.current = true;
        return;
      }
      time = difference * .4;
    }
    if (difference !== 0) {
      gsap.to(ref.current.position, time, { y: -index * 20 + currentScrollIndex * 20, ease: 'custom' })
      gsap.to(uniformsRef.current.u_waveIntensity, time * .33333, { ease: 'custom', value: 1 })
      gsap.to(uniformsRef.current.u_waveIntensity, time * .66666, { ease: 'custom', value: 0.3, delay: time * .33333 })
    }
    if (index === 0 && (path === '/about' || path === '/')) {
      gsap.to(uniformsRef.current.u_progress, .3, { value: 1, ease: 'power2.out', delay: time + 1.2 })
      gsap.to(ref.current.position, 1, { y: 20, ease: 'power2.out', delay: time + 1.2 })
      gsap.set(uniformsRef.current.u_progress, { value: .5, delay: time + 2.2 })
    }

    lastScrollIndexRef.current = currentScrollIndex;
  }, [currentScrollIndex, index, path])

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