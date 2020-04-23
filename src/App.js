import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Stats from './components/Stats';
import CountrySelector from './components/CountrySelector';
import Header from './components/Header';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Stats url="https://covid19.mathdro.id/api" global/>
    <CountrySelector />
  </>
)

export default App;
