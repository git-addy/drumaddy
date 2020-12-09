import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './containers/Contact';
import Blog from './containers/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Header /> */}
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog/:postId" component={Blog} />
        
      </div>
    </Router>
  )
}

export default App;
