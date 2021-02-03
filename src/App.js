import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Soul from './pages/Soul/Soul';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/soul">
          <Soul/>
        </Route>
        <Route exact path="/images">
          <ImageGallery/>
        </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
