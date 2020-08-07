import React, { useEffect, useState, useContext } from 'react';
import gsap from 'gsap';
import { LoadingContext } from '../context/context';
import { useLockBodyScroll, useToggle } from 'react-use';
import header from '../assets/projects/burger/header.png';
import photo from '../assets/photo.jpg';
import incoming from '../assets/incoming.jpg';

const images = [header, photo, incoming]

const Loader = () => {
  const { setIsLoaded } = useContext(LoadingContext)
  const [loaded, setLoaded] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [locked, toggleLocked] = useToggle(true);

  useLockBodyScroll(locked);

  useEffect(() => {
    images.forEach(img => {
      new Image().src = img;
    })
  }, [])

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true)
    })
  }, [])
  useEffect(() => {
    if (loaded && animated) {
      gsap.to('.loader span', .7, { y: '100%', ease: 'power2.out' })
      gsap.to('.loader__loading-left, .loader__loading-right', .7, { autoAlpha: 0 })
      gsap.to('.loader', .5, {
        autoAlpha: 0, delay: 1.2, onComplete: () => {
          setMounted(false);
          setIsLoaded(true);
          toggleLocked(false)
        }
      })
    }
  }, [loaded, animated, setIsLoaded, toggleLocked])
  useEffect(() => {
    gsap.to('.loader span', .7, { y: 0, ease: 'power2.out' })
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    const width = window.innerWidth / 2;
    const spike1 = (Math.random() * 0.3 + .2) * width;
    const spike2 = spike1 + (Math.random() * 0.1 + .2) * width;
    const spike3 = width;

    tl.to('.loader__loading-left, .loader__loading-right', .3, { delay: 1.2, width: `${spike1}px` })
      .to('.loader__loading-left, .loader__loading-right', .4, { delay: .3, width: `${spike2}px` })
      .to('.loader__loading-left, .loader__loading-right', .5, { delay: .3, width: `${spike3}px`, onComplete: () => setAnimated(true) })
  }, [])

  let content = null;
  if (mounted) {
    content = (
      <div className='loader'>
        <div className="loader__content">
          <div className="loader__name-box">
            <h1><span>Bartłomiej Wiejak</span></h1>
            <h2><span>Portfolio 2020</span></h2>
          </div>
          <div className="loader__loading">
            <div className="loader__loading-right"></div>
            <div className="loader__loading-left"></div>
            <div className="loader__loading-text">
              <span>LOADING</span>
            </div>
          </div>
          <div className="loader__copyright"><span>Copyright 2020 © Bartłomiej Wiejak</span></div>
        </div>
      </div>
    )
  }
  return content;
}

export default Loader;
