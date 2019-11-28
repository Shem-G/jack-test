import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import { Route, Switch } from 'react-router-dom'
import index from './pages/index'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">hello</div>
    </div>
  );
}

export default App;
