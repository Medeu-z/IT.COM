import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div className="App app-wrapper">
        <Header/>
          <Content/>
          <Aside/>
        <Footer/>
    </div>
  );
}

export default App;
