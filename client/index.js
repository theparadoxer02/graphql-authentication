import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';


const link = new HttpLink({
  uri: '/graphql',
  // Additional fetch options like `credentials` or `headers`
  credentials: 'same-origin',
});

const cache = new InMemoryCache({
  dataIdFromObject: object => object.key || null
});

const client = new ApolloClient({
  link,
  cache
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <Route path="login" component={LoginForm} />
        <Route path="signup" component={SignupForm} />
        <Route path="dashboard" component={requireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
