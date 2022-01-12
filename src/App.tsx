import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../src/components/Header'
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from './components/Ad';

function App() {
  return (
    <div className="App">
      <Header user="Steve"/>
      <Ad flavor="Chocolate" fontSize={20} darkTheme={true}/>
      <Ad flavor="Vanilla" fontSize={18} darkTheme={false}/>
      <Ad flavor="Strawberry" fontSize={25} darkTheme={false}/>
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
