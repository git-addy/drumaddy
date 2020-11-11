import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
