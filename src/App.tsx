import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useMediaQuery } from '@mui/material';
import PleaseRotate from './components/PleaseRotate';

const isOnlyForLandscape = false;

function App() {
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <>
      {isPortrait && isOnlyForLandscape && <PleaseRotate />}
      <ParallaxProvider>
        <Header />
        <Main isPortrait={isPortrait && !isOnlyForLandscape} />
      </ParallaxProvider>
    </>
  );
}

export default App;
