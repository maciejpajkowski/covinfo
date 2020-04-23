import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Stats from './components/Stats';
import CountrySelector from './components/CountrySelector';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Stats url="https://covid19.mathdro.id/api" global/>
    <CountrySelector />
    <Footer />
  </>
)

export default App;
