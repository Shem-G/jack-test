import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/index'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container main-content">
      <div className="row">
      <Homepage />
      </div>
      
      </div>
    </div>
  );
}

export default App;
