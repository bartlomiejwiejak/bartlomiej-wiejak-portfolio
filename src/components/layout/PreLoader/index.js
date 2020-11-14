import React, { useEffect, useContext } from 'react';
import Preload, { Order } from "image-preload";

import { LoadingContext } from '../../../context';
import { loadingStart, loadingComplete, loadingProgress } from '../../../animations/loader';
import assets from './assets';

const PreLoader = () => {
  const { loadingState, dispatch } = useContext(LoadingContext)

  useEffect(() => {
    loadingStart();
    const assetsLength = assets.length;
    let currentAsset = 0;
    let spike = 1;

    setTimeout(() => {
      Preload(assets, {
        order: Order.InOrder,
        onSingleImageComplete: () => {
          currentAsset++;
          if ((currentAsset / assetsLength) > spike * .16 || (currentAsset / assetsLength) === 1) {
            loadingProgress(spike++);
          }
        },
        onComplete: () => {
          loadingComplete(() => {
            dispatch({ type: 'SET_IS_LOADED', payload: true })
          })
        }
      })
    }, 1000)

  }, [dispatch])

  return (
    !loadingState.isLoaded && (
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
            <div className='values'>
              <div>
                <span>0</span>
                <span>0</span>
              </div>
              <div>
                <span>1</span>
                <span>6</span>
              </div>
              <div>
                <span>3</span>
                <span>2</span>
              </div>
              <div>
                <span>4</span>
                <span>8</span>
              </div>
              <div>
                <span>6</span>
                <span>4</span>
              </div>
              <div>
                <span>8</span>
                <span>0</span>
              </div>
              <div>
                <span>9</span>
                <span>6</span>
              </div>
              <div>
                <span>1</span>
                <span>00</span>
              </div>
            </div>
            <div className='percent'>
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="loader__copyright"><span>Copyright 2020 © Bartłomiej Wiejak</span></div>
      </div>
    )
  );
}

export default PreLoader;