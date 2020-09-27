import React, { useEffect, useState, useContext } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useLockBodyScroll, useToggle } from 'react-use';

import { LoadingContext } from '../../context';
import header from '../../assets/projects/burger/header.jpg';
import photo from '../../assets/about/photo.jpg';
import incoming from '../../assets/projects/incoming.jpg';

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
      gsap.registerPlugin(CustomEase);
      CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.598,0.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1');
      const tl = gsap.timeline({ defaults: { ease: 'custom' } })
      tl.to('.loader span', 1.5, { y: '100%', ease: 'power2.out' })
        .to('.loader__loading-left, .loader__loading-right', .5, { autoAlpha: 0, delay: -1 })
        .to('.loader__overlay', 1, { height: '50vh' })
        .to('.loader__overlay', 1, { x: '-100%' })
        .to('.loader', .5, {
          autoAlpha: 0, ease: 'power2.out', onComplete: () => {
            setMounted(false);
            setIsLoaded(true);
            toggleLocked(false)
          }
        })
    }
  }, [loaded, animated, setIsLoaded, toggleLocked])
  useEffect(() => {
    gsap.to('.loader span', 1.5, { y: 0, ease: 'power2.out' })
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    let interval;
    const width = window.innerWidth / 2;
    const spike1 = (Math.random() * 0.3 + .2) * width;
    const spike2 = spike1 + (Math.random() * 0.1 + .2) * width;
    const spike3 = width;
    document.querySelectorAll('.loader__loading-text span span').forEach((span, id) => {
      gsap.to(span, .2, { y: '-10%', yoyo: true, repeat: 1, delay: id * 0.10 + 1.4 })
    })
    setTimeout(() => {
      document.querySelectorAll('.loader__loading-text span span').forEach((span, id) => {
        gsap.to(span, .2, { y: '-10%', yoyo: true, repeat: 1, delay: id * 0.10 })
      })
      interval = setInterval(() => {
        document.querySelectorAll('.loader__loading-text span span').forEach((span, id) => {
          gsap.to(span, .2, { y: '-10%', yoyo: true, repeat: 1, delay: id * 0.10 })
        })
      }, 900)
    }, 2200)
    tl.to('.loader__loading-left, .loader__loading-right', .4, { delay: 1.5, width: `${spike1}px` })
      .to('.loader__loading-left, .loader__loading-right', .7, { delay: .3, width: `${spike2}px` })
      .to('.loader__loading-left, .loader__loading-right', .5, {
        delay: .4, width: `${spike3}px`, onComplete: () => {
          setAnimated(true);
          clearInterval(interval);
        }
      })
  }, [])

  let content = null;
  if (mounted) {
    content = (
      <div className='loader'>
        <div className="loader__overlay--up loader__overlay" />
        <div className="loader__overlay--down loader__overlay" />
        <div className="loader__name-box">
          <h1><span>Bartłomiej Wiejak</span></h1>
          <h2><span>Portfolio 2020</span></h2>
        </div>
        <div className="loader__loading">
          <div className="loader__loading-right"></div>
          <div className="loader__loading-left"></div>
          <div className="loader__loading-text">
            <span>
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </span>
          </div>
        </div>
        <div className="loader__copyright"><span>Copyright 2020 © Bartłomiej Wiejak</span></div>
      </div>
    )
  }
  return content;
}

export default Loader;