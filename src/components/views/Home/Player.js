import React, { useState, useEffect, useContext } from 'react'
import gsap from 'gsap';

import { cursorExpand } from '../../../animations/cursor';
import { cursorBackToNormal } from '../../../animations/cursor';
import { LoadingContext } from '../../../context/index';
import audio from '../../../config/player';
import isMobile from '../../../functions/isMobile';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { loadingState, dispatch } = useContext(LoadingContext);

  useEffect(() => {
    if (loadingState.isLoaded) {
      if (!audio.paused) {
        setIsPlaying(true)
      }
      return;
    }
  }, [loadingState.isLoaded])

  useEffect(() => {
    let animation;
    if (loadingState.isLoaded & isPlaying) {
      let contextAnalyser;
      if (!loadingState.analyser) {
        const context = new AudioContext();
        contextAnalyser = context.createAnalyser();
        const source = context.createMediaElementSource(audio);
        source.connect(contextAnalyser);
        contextAnalyser.connect(context.destination);
        dispatch({ type: 'SET_ANALYSER', payload: contextAnalyser })
      } else {
        contextAnalyser = loadingState.analyser;
      }
      const playerLine = document.querySelectorAll('.player__line');
      const light = document.querySelector('.light');
      const shadow = document.querySelector('.home__welcome--shadow');
      let animatingContent = (fbc_array) => {
        playerLine[0].style.width = fbc_array[1] / 3 + 'px';
        playerLine[1].style.width = fbc_array[1] / 3 + 'px';
        gsap.set(light, { scaleX: .5 + (fbc_array[1] / 3) / 100, scaleY: .5 + (fbc_array[99] / 3) / 100 });
        gsap.set(shadow, { scale: 1.05 + (fbc_array[1] / 50) / 100 });
      }
      if (isMobile()) {
        animatingContent = (fbc_array) => {
          playerLine[0].style.width = fbc_array[1] / 3 + 'px';
          playerLine[1].style.width = fbc_array[1] / 3 + 'px';
        }
      }

      const frameLooper = () => {
        const fbc_array = new Uint8Array(contextAnalyser.frequencyBinCount);
        contextAnalyser.getByteFrequencyData(fbc_array);
        animatingContent(fbc_array);
        animation = requestAnimationFrame(frameLooper);
      }

      animation = requestAnimationFrame(frameLooper);
    }

    return () => {
      gsap.to('.player__line', .5, { width: 0 })
      if (!isMobile()) {
        gsap.to('.light', .5, { scaleX: .5, scaleY: .5 })
        gsap.to('.home__welcome--shadow', .5, { scale: 1.05 })
      }
      cancelAnimationFrame(animation);
    }
  }, [isPlaying, loadingState.isLoaded, loadingState.analyser, dispatch])

  const playHandle = async () => {
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      if (!audio.src) {
        const url = `//api.soundcloud.com/resolve.json?url=https://soundcloud.com/halfaliveco/still-feel&client_id=${process.env.REACT_APP_CLIENT_ID}`
        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData.stream_url) {
          audio.src = `${responseData.stream_url}?client_id=${process.env.REACT_APP_CLIENT_ID}`
        } else {
          return;
        }
      }
      audio.play()
      setIsPlaying(true)
    }
  }

  let content;
  if (isPlaying) {
    content = <i onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} onClick={playHandle} className="fas fa-pause">
      <div className="player__line player__line--right"></div>
      <div className="player__line player__line--left"></div>
    </i>
  } else {
    content = <i onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} onClick={playHandle} className="fas fa-play">
      <div className="player__line player__line--right"></div>
      <div className="player__line player__line--left"></div>
    </i>
  }

  return (
    <div className='player'>
      <div className="player__content">
        {content}
      </div>
      <a draggable={false} href='https://soundcloud.com/halfaliveco/still-feel' target='_blank' rel='noopener noreferrer'><span className="player__song"><span>still feel - half•alive</span></span></a>
    </div>
  )
}

export default Player