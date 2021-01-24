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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <Home/>
        </Route>
        <Route exact path="/soul">
          <Soul/>
        </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
