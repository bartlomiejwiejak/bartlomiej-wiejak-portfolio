import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import fragment from './shaders/fragment';
import vertex from './shaders/vertex';
import { toLight } from '../../functions/handleBackground';

gsap.registerPlugin(CustomEase)
CustomEase.create('custom', 'M0,0 C0,0 0.094,0.019 0.174,0.058 0.231,0.085 0.24,0.088 0.318,0.15 0.426,0.25 0.627,0.701 0.718,0.836 0.819,0.985 1,1 1,1 ')

const clock = new THREE.Clock();

const uniforms = {
  u_time: { type: "f", value: 0 },
  u_res: {
    type: "v2",
    value: new THREE.Vector2(window.innerWidth, window.innerHeight)
  },
  u_mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
  u_directionMouse: { type: "v2", value: new THREE.Vector2(0, 0) },
  u_text0: { value: null },
  u_progress: { type: "f", value: .5 },
  u_waveIntensity: { type: "f", value: .3 },
  u_direction: { type: "f", value: .5 },
  u_offset: { type: "f", value: 10 },
  u_volatility: { type: "f", value: 1 },
  u_textureFactor: { type: "v2", value: new THREE.Vector2(1, 1) }
}

const Project = ({ texture, index, loaded, currentScrollIndex, path, url, pathname, lastProject, animating }) => {
  const ref = useRef()
  const uniformsRef = useRef({
    ...uniforms, u_text0: { value: new THREE.TextureLoader().load(texture) }
  })
  const initializedRef = useRef(false);
  const lastScrollIndexRef = useRef(0);
  const leavingWorkRef = useRef(false);
  const loadedRef = useRef(false);

  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const lastMouseRef = useRef({
    x: 0,
    y: 0
  })

  const onMouse = useCallback(() => {
    const x = mouseRef.current.x;
    const y = mouseRef.current.y;
    const lastX = lastMouseRef.current.x;
    const lastY = lastMouseRef.current.y;

    let directionX;
    if (lastX - x < 0) {
      directionX = 1;
    } else if (lastX - x === 0) {
      directionX = 0;
    } else {
      directionX = -1
    }

    let directionY;
    if (lastY - y < 0) {
      directionY = 1;
    } else if (lastY - y === 0) {
      directionY = 0;
    } else {
      directionY = -1
    }
    gsap.to(uniformsRef.current.u_directionMouse.value, 1, {
      x: directionX,
      y: directionY
    });

    lastMouseRef.current = { ...mouseRef.current };
  }, []);

  useFrame(() => {
    uniformsRef.current.u_time.value = clock.getElapsedTime() / 5;
    onMouse()
  })

  useEffect(() => {
    if (loaded && pathname !== '/work' && !loadedRef.current && currentScrollIndex !== null) {
      gsap.set(ref.current.position, { y: -index * 20 + currentScrollIndex * 20 })
      lastScrollIndexRef.current = currentScrollIndex;
      loadedRef.current = true;
    }
    if (!loaded || pathname !== '/work' || loadedRef.current === true) return;            // /work enter animation
    const timeout = toLight(1000);
    const delay = timeout / 1000;

    gsap.to(ref.current.position, 3.3, { y: -index * 20, delay: delay, ease: 'power3.out' })
    gsap.to(uniformsRef.current.u_waveIntensity, 1.1, { value: 1, delay: delay })
    gsap.to(uniformsRef.current.u_waveIntensity, 2.2, { value: 0.3, delay: delay + 1 })
    loadedRef.current = true;
  }, [index, loaded, pathname, currentScrollIndex])

  useEffect(() => {                     // /work scrolling feature
    if (currentScrollIndex === null) return;
    if (!initializedRef.current) {
      initializedRef.current = true;
      return;
    }
    if (pathname !== '/work') return;
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
      if (lastProject === null) {
        gsap.to(uniformsRef.current.u_waveIntensity, time * .33333, { ease: 'custom', value: 1 })
        gsap.to(uniformsRef.current.u_waveIntensity, time * .66666, { ease: 'custom', value: 0.3, delay: time * .33333 })
      }
    }
    if (index === 0 && (path === '/about' || path === '/')) {
      gsap.to(uniformsRef.current.u_progress, .5, { value: 1, ease: 'power2.out', delay: time + 1.2 })
      gsap.to(ref.current.position, 1, { y: 20, ease: 'power2.out', delay: time + 1.2 })
      gsap.to(uniformsRef.current.u_waveIntensity, .25, { value: 1, ease: 'power2.out', delay: time + 1.2 })
      gsap.set(uniformsRef.current.u_progress, { value: .5, delay: time + 2.2 })
    }

    lastScrollIndexRef.current = currentScrollIndex;
  }, [currentScrollIndex, index, path, pathname, lastProject])

  useEffect(() => {  // project enter animation
    if (loaded && pathname === url && path !== '/work' && path !== '/about' && path !== '/' && !animating) {
      if (lastProject === null) {
        console.log('entering project from work')
        gsap.to(uniformsRef.current.u_waveIntensity, .3, { value: 1, ease: 'power2.out', delay: 1 })
        gsap.to(uniformsRef.current.u_waveIntensity, .7, { value: 0, ease: 'power2.out', delay: 1.8 })
        gsap.to(uniformsRef.current.u_progress, 1, { value: 0, ease: 'power2.out', delay: 1 })
      } else if (currentScrollIndex !== lastScrollIndexRef.current && lastProject < index && currentScrollIndex !== lastProject) {
        console.log('entering project from inside', index)
        gsap.set(uniformsRef.current.u_progress, { value: .25 })
        gsap.set(uniformsRef.current.u_waveIntensity, { value: .3 })
        console.log('start y', -index * 20 + currentScrollIndex * 20 - 20)
        gsap.set(ref.current.position, { y: -index * 20 + currentScrollIndex * 20 - 20 })
        gsap.to(ref.current.position, 2, { y: -index * 20 + currentScrollIndex * 20, ease: 'none' })
        gsap.to(uniformsRef.current.u_waveIntensity, .3, { value: 1, ease: 'none', delay: 2.3 })
        gsap.to(uniformsRef.current.u_waveIntensity, .7, { value: 0, ease: 'none', delay: 2.6 })
        gsap.to(uniformsRef.current.u_progress, 1, { value: 0, delay: 2.3 })
      }
    }
  }, [pathname, url, lastProject, loaded, currentScrollIndex, index, path, animating])

  useEffect(() => {  // going work
    if (pathname === url && path === '/work' && lastProject === index) {
      console.log('going work')
      gsap.to(uniformsRef.current.u_waveIntensity, .3, { value: 1, ease: 'power2.out', delay: 1.3 })
      gsap.to(uniformsRef.current.u_waveIntensity, .7, { value: .3, ease: 'power2.out', delay: 1.6 })
      gsap.to(uniformsRef.current.u_progress, 1, { value: .5, ease: 'power2.out', delay: 1.3 })
    }
  }, [pathname, path, lastProject, index, url])

  useEffect(() => {         // leaving project
    if (pathname === url && path !== '/work' && lastProject === index) {
      console.log('leaving project')
      gsap.to(uniformsRef.current.u_progress, .5, { value: 1, ease: 'power2.out', delay: 1.5 })
      gsap.to(uniformsRef.current.u_waveIntensity, .25, { value: 1, ease: 'power2.out', delay: 1.5 })
      gsap.to(ref.current.position, 1, { y: 20, ease: 'power2.out', delay: 1.5 })
      gsap.set(uniformsRef.current.u_progress, { value: .5, delay: 2.5 })
      gsap.set(uniformsRef.current.u_waveIntensity, { value: .3, delay: 2.5 })
    }
  }, [pathname, url, path, lastProject, index])

  useEffect(() => {
    const handleMousemove = ({ clientX, clientY }) => {
      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;

      gsap.to(uniformsRef.current.u_mouse.value, 1, {
        x: mouseRef.current.x,
        y: window.innerHeight - mouseRef.current.y
      })
    }
    document.addEventListener('mousemove', handleMousemove)
    return () => document.removeEventListener('mousemove', handleMousemove)
  }, [])

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