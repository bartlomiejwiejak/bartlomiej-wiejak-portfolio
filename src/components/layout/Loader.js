import React, { useEffect, useState, useContext } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';

import { LoadingContext } from '../../context';
import img1 from '../../assets/projects/burger/header.webp';
import img2 from '../../assets/projects/vault/header.webp';
import img3 from '../../assets/about/photo.webp';
import img4 from '../../assets/projects/incoming.webp';
import img5 from '../../assets/projects/places/header.webp';
import img6 from '../../assets/about/circle-interactivedeveloper.webp';
import img7 from '../../assets/projects/burger/menu-mobile.webp';
import img8 from '../../assets/projects/burger/builder-mobile.webp';
import img9 from '../../assets/projects/burger/home-mobile.webp';
import img10 from '../../assets/projects/places/mobile-posts.webp';
import img11 from '../../assets/projects/places/home-mobile.webp';
import img12 from '../../assets/projects/places/user-profile-mobile.webp';
import img13 from '../../assets/projects/vault/mobile-1.webp';
import img14 from '../../assets/projects/vault/mobile-2.webp';
import img15 from '../../assets/projects/vault/mobile-3.webp';
import img16 from '../../assets/about/circle-letswork.webp';
import img17 from '../../assets/about/technologies/css.webp';
import img18 from '../../assets/about/technologies/firebase.webp';
import img19 from '../../assets/about/technologies/git.webp';
import img20 from '../../assets/about/technologies/gsap.webp';
import img21 from '../../assets/about/technologies/html.webp';
import img22 from '../../assets/about/technologies/js.webp';
import img23 from '../../assets/about/technologies/mongo.webp';
import img24 from '../../assets/about/technologies/node.webp';
import img25 from '../../assets/about/technologies/opengl.webp';
import img26 from '../../assets/about/technologies/react-three-fiber.webp';
import img27 from '../../assets/about/technologies/react.webp';
import img28 from '../../assets/about/technologies/redux.webp';
import img29 from '../../assets/about/technologies/sass.webp';
import img30 from '../../assets/about/technologies/webgl.webp';
import img31 from '../../assets/about/technologies/webpack.webp';
import { loading, loadingComplete } from '../../animations/loader';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]

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