import React from 'react';
import Routes from './routes'

import { Router } from 'react-router-dom';
import history from './services/history';

import GlobalStyle from './styles/styleGlobal';


function App() {
  return (

    <Router history={history}>
        <Routes />,
        <GlobalStyle />
    </Router>

  )
}

export default App;
