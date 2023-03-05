import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Main />
    </ParallaxProvider>
  );
}

export default App;
