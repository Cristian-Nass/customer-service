import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import User from './components/User'
import MapComponent from './components/Map'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route  path="/user" component={User} />
          <Route  path="/map" component={MapComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
