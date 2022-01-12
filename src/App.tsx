import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../src/components/Header'
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header user="Steve"/>
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
