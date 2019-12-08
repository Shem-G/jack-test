import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const API = 'https://api-euwest.graphcms.com/v1/ck3wbruja2jx601f1d9wdfxou/master';

const client = new ApolloClient({
  link: new HttpLink ({ uri: API}),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>,
    document.querySelector('#root')
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
