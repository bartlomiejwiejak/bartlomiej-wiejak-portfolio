import React, { useEffect, useState, useContext } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';

import { LoadingContext } from '../../context';
import img1 from '../../assets/projects/burger/header.jpg';
import img2 from '../../assets/projects/vault/header.jpg';
import img3 from '../../assets/about/photo.jpg';
import img4 from '../../assets/projects/incoming.jpg';
import img5 from '../../assets/projects/places/header.jpg';
import { loading, loadingComplete } from '../../animations/loader';

const images = [img1, img2, img3, img4, img5]

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
      loadingComplete(() => {
        setMounted(false);
        setIsLoaded(true);
        toggleLocked(false)
      })
    }
  }, [loaded, animated, setIsLoaded, toggleLocked])
  useEffect(() => {
    loading(() => setAnimated(true));
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
          <div className="loader__loading-right" />
          <div className="loader__loading-left" />
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