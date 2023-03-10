import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useMediaQuery } from '@mui/material';
import PleaseRotate from './components/PleaseRotate';
import Video from './components/Video';

const isOnlyForLandscape: boolean = process.env.REACT_APP_ONLY_LANDSCAPE === 'true';

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};

const App: React.FC = () =>{
  const isPortrait = useMediaQuery('(orientation: portrait)');

  useEffect(() => {
    window.addEventListener('resize', appHeight);
    appHeight();
    return () => {
      window.removeEventListener('resize', appHeight);
    }
  });

  return (
    <>
      {isPortrait && isOnlyForLandscape && <PleaseRotate />}
      <ParallaxProvider>
        <Header />
        <Main isPortrait={isPortrait && !isOnlyForLandscape} />
        <Video />
      </ParallaxProvider>
    </>
  );
};

export default App;
