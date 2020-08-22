import React, { useState, useEffect, useContext } from 'react'
import gsap from 'gsap';

import { cursorExpand } from '../../../animations/cursor';
import { cursorBackToNormal } from '../../../animations/cursor';
import { LoadingContext } from '../../../context/index';
import isMobile from '../../../functions/isMobile';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { loaded, analyser, setAnalyser } = useContext(LoadingContext);

  useEffect(() => {
    if (loaded) {
      if (document.querySelector('.player__audio')) {
        if (!document.querySelector('.player__audio').paused) {
          setIsPlaying(true)
        }
        return;
      }
      const audio = document.createElement('audio');
      audio.className = 'player__audio';
      audio.loop = true;
      audio.crossOrigin = "anonymous";
      audio.style.display = 'none';
      audio.volume = .5
      document.getElementById('root').appendChild(audio);
    }
  }, [loaded])

  useEffect(() => {
    let animation;
    if (loaded & isPlaying) {
      let contextAnalyser;
      if (!analyser) {
        const audio = document.querySelector('.player__audio')
        const context = new AudioContext();
        contextAnalyser = context.createAnalyser();
        const source = context.createMediaElementSource(audio);
        source.connect(contextAnalyser);
        contextAnalyser.connect(context.destination);
        setAnalyser(contextAnalyser)
      } else {
        contextAnalyser = analyser;
      }

      let animatingContent = (fbc_array) => {
        gsap.set('.player__line', { width: fbc_array[1] / 5 })
        gsap.set('.light', { scaleX: .5 + (fbc_array[1] / 2) / 100, scaleY: .5 + (fbc_array[99] / 2) / 100 })
      }
      if (isMobile()) {
        animatingContent = (fbc_array) => {
          gsap.set('.player__line', { width: fbc_array[1] / 5 })
        }
      }

      const frameLooper = () => {
        const fbc_array = new Uint8Array(contextAnalyser.frequencyBinCount);
        contextAnalyser.getByteFrequencyData(fbc_array);
        if (!!document.querySelector('.light') || !!document.querySelector('.player__line--left')) {
          animatingContent(fbc_array);
          requestAnimationFrame(frameLooper)
        } else return;
      }

      animation = requestAnimationFrame(frameLooper);

      return () => cancelAnimationFrame(animation);
    }
    return () => cancelAnimationFrame(animation);
  }, [isPlaying, loaded, analyser, setAnalyser])

  const playHandle = async () => {
    if (isPlaying) {
      document.querySelector('.player__audio').pause()
      setIsPlaying(false)
    } else {
      const audio = document.querySelector('.player__audio')
      if (!audio.src) {
        const url = `//api.soundcloud.com/resolve.json?url=https://soundcloud.com/downtownrecords/justice-dvno&client_id=${process.env.REACT_APP_CLIENT_ID}`
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
      <a href='https://soundcloud.com/downtownrecords/justice-dvno' target='_blank' rel='noopener noreferrer'><span className="player__song"><span>dvno - justice</span></span></a>
    </div>
  )
}

export default Player