import React from 'react';

import GlobalStyled from './styles/global';
import Header from './components/Header';
import Board from './components/Board';


function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Board />
    </>
  );
}

export default App;
