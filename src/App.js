import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Home, Setup } from './components';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/setup' component={Setup} />
      </Router>
    </div>
  );
}

export default App;
