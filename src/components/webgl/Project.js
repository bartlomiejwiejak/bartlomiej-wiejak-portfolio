import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import fragment from './shaders/fragment';
import vertex from './shaders/vertex';
import { toLight } from '../../functions/handleBackground';

gsap.registerPlugin(CustomEase)
CustomEase.create('custom', 'M0,0 C0,0 0.094,0.019 0.174,0.058 0.231,0.085 0.24,0.088 0.318,0.15 0.426,0.25 0.627,0.701 0.718,0.836 0.819,0.985 1,1 1,1 ')
CustomEase.create('work-enter', 'M0,0 C0.068,0.044 -0.038,-0.021 0.208,0.128 0.36,0.22 0.439,0.655 0.534,0.842 0.607,0.986 0.934,1 1,1 ')

const clock = new THREE.Clock();

const Project = ({ texture, index, loaded, currentScrollIndex, path, url, pathname, lastProject, animating }) => {
  const ref = useRef()

  const initializedRef = useRef(false);
  const lastScrollIndexRef = useRef(0);
  const leavingWorkRef = useRef(false);
  const loadedRef = useRef(false);
  const [planeSize, setPlaneSize] = useState([16, 8])

  const uniformsRef = useRef({
    u_time: { type: "f", value: 0 },
    u_text0: {
      value: texture
    },
    u_res: {
      type: "v2",
      value: new THREE.Vector2(window.innerWidth, window.innerHeight)
    },
    u_mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
    u_directionMouse: { type: "v2", value: new THREE.Vector2(0, 0) },
    u_progress: { type: "f", value: .5 },
    u_waveIntensity: { type: "f", value: .3 },
    u_direction: { type: "f", value: .5 },
    u_offset: { type: "f", value: 10 },
    u_volatility: { type: "f", value: 1 },
    u_textureFactor: { type: "v2", value: new THREE.Vector2(1, 1) }
  })

  const calculateAspectRatio = useCallback(() => {
    if (!texture.image) return;
    const windowRatio = window.innerWidth / window.innerHeight;
    const imageRatio = texture.image.width / texture.image.height;
    let factorX = 1;
    let factorY = 1;

    if (windowRatio > imageRatio) {
      factorX = 1;
      factorY = 1 / windowRatio * imageRatio;
    } else {
      factorX = 1 * windowRatio / imageRatio;
      factorY = 1;
    }

    let width = 16;
    if (windowRatio < 1.1) {
      width = 16 * windowRatio - 1;
    }
    setPlaneSize([width, 8]);
    uniformsRef.current.u_textureFactor.value = new THREE.Vector2(factorX, factorY);
    uniformsRef.current.u_textureFactor.needsUpdate = true;
  }, [texture.image])

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
      directionX = 1.5;
    } else if (lastX - x === 0) {
      directionX = 0;
    } else {
      directionX = -1.5;
    }

    let directionY;
    if (lastY - y < 0) {
      directionY = 1.5;
    } else if (lastY - y === 0) {
      directionY = 0;
    } else {
      directionY = -1.5;
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

  useEffect(() => {                                    // /work enter animation
    if (loaded && pathname !== '/work' && !loadedRef.current && currentScrollIndex !== null) {
      gsap.set(ref.current.position, { y: -index * 20 + currentScrollIndex * 20 })
      lastScrollIndexRef.current = currentScrollIndex;
      loadedRef.current = true;
    }
    if (!loaded || pathname !== '/work' || loadedRef.current === true) return;
    const timeout = toLight(1000);
    const delay = timeout / 1000;

    gsap.to(ref.current.position, 3, { y: -index * 20, delay: delay, ease: 'work-enter' })
    gsap.to(uniformsRef.current.u_waveIntensity, 1, { value: 1, delay: delay })
    gsap.to(uniformsRef.current.u_waveIntensity, 2, { value: 0.3, delay: delay + 1 })
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
        gsap.fromTo(uniformsRef.current.u_direction, 1, { value: .5 }, { value: 1, ease: 'power2.out', delay: 1 })
      } else if (currentScrollIndex !== lastScrollIndexRef.current && lastProject < index && currentScrollIndex !== lastProject) {
        console.log('entering project from inside', index)
        if (window.innerWidth / window.innerHeight > 1) {
          gsap.set(uniformsRef.current.u_progress, { value: .25 })
        } else {
          gsap.set(uniformsRef.current.u_progress, { value: .5 })
        }
        gsap.set(uniformsRef.current.u_direction, { value: .5 })
        gsap.set(uniformsRef.current.u_waveIntensity, { value: .3 })
        console.log('start y', -index * 20 + currentScrollIndex * 20 - 20)
        gsap.set(ref.current.position, { y: -index * 20 + currentScrollIndex * 20 - 20 })
        gsap.to(ref.current.position, 2, { y: -index * 20 + currentScrollIndex * 20, ease: 'none' })
        gsap.to(uniformsRef.current.u_waveIntensity, .3, { value: 1, ease: 'none', delay: 2.3 })
        gsap.to(uniformsRef.current.u_waveIntensity, .7, { value: 0, ease: 'none', delay: 2.6 })
        gsap.to(uniformsRef.current.u_progress, 1, { value: 0, delay: 2.3 })
        gsap.fromTo(uniformsRef.current.u_direction, 1, { value: .5 }, { value: 1, ease: 'power2.out', delay: 2.3 })
      }
    }
  }, [pathname, url, lastProject, loaded, currentScrollIndex, index, path, animating])

  useEffect(() => {  // going work
    if (pathname === url && path === '/work' && lastProject === index) {
      console.log('going work')
      gsap.to(uniformsRef.current.u_waveIntensity, .3, { value: 1, ease: 'power2.out', delay: 1.3 })
      gsap.to(uniformsRef.current.u_waveIntensity, .7, { value: .3, ease: 'power2.out', delay: 1.6 })
      gsap.to(uniformsRef.current.u_progress, 1, { value: .5, ease: 'power2.out', delay: 1.3 })
      gsap.fromTo(uniformsRef.current.u_direction, 1, { value: 1 }, { value: .5, ease: 'power2.out', delay: 1.3 })
    }
  }, [pathname, path, lastProject, index, url])

  useEffect(() => {         // leaving project
    if (pathname === url && path !== '/work' && lastProject === index) {
      console.log('leaving project')
      gsap.to(uniformsRef.current.u_progress, .5, { value: 1, ease: 'power2.out', delay: 1.5 })
      gsap.to(uniformsRef.current.u_waveIntensity, .25, { value: 1, ease: 'power2.out', delay: 1.5 })
      gsap.to(ref.current.position, 1, {
        y: 20, ease: 'power2.out', delay: 1.5, onComplete: () => {
          gsap.set(uniformsRef.current.u_progress, { value: .5 })
        }
      })
      gsap.fromTo(uniformsRef.current.u_direction, .5, { value: 1 }, { value: .5, ease: 'power2.out', delay: 1.5 })
    }
  }, [pathname, url, path, lastProject, index])

  useEffect(() => {                                     //events
    const onMousemove = ({ clientX, clientY }) => {
      const pixelRatio = window.devicePixelRatio;
      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;

      gsap.to(uniformsRef.current.u_mouse.value, 1, {
        x: mouseRef.current.x * pixelRatio,
        y: (window.innerHeight - mouseRef.current.y) * pixelRatio
      })
    }
    const onTouch = (({ touches }) => {
      const pixelRatio = window.devicePixelRatio;
      mouseRef.current.x = touches[0].clientX;
      mouseRef.current.y = touches[0].clientY;

      gsap.to(uniformsRef.current.u_mouse.value, 1, {
        x: mouseRef.current.x * pixelRatio,
        y: (window.innerHeight - mouseRef.current.y) * pixelRatio
      })
    })
    const onResize = () => {
      uniformsRef.current.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
      calculateAspectRatio();
    }
    onResize();

    document.addEventListener('touchmove', onTouch)
    document.addEventListener('mousemove', onMousemove)
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('mousemove', onMousemove)
      window.removeEventListener('resize', onResize);
      document.removeEventListener('touchmove', onTouch)
    }
  }, [calculateAspectRatio])

  return (
    <mesh
      ref={ref}
      position={[0, 80 - index * 20, 0]}
    >
      <planeBufferGeometry attach='geometry' args={[...planeSize, 60, 60]} />
      <shaderMaterial
        uniforms={uniformsRef.current}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  )
}

export default Project;