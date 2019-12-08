import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Homepage from './pages/index';
import WhoAmI from './pages/who-am-i';
import InterestingThings from './pages/interesting-things';
import Theatre from './pages/theatre';
import WhatIWrite from './pages/what-i-write';
import Blog from './pages/blog';
import BlogPost from './pages/post';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container main-content">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/who-am-i" component={WhoAmI} />
          <Route path="/interesting-things" component={InterestingThings} />
          <Route path="/theatre" component={Theatre} />
          <Route path="/what-i-write" component={WhatIWrite} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/post/:slug" component={BlogPost} />
        </Switch>
      
      </div>
    </div>
  );
}

export default App;
