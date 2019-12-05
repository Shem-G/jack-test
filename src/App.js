import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Homepage from './pages/index';
import WhoAmI from './pages/whoami';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container main-content">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/who-am-i" component={WhoAmI} />
        </Switch>
      
      </div>
    </div>
  );
}

export default App;
