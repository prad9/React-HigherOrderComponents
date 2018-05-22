import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

import requireAuth from "./components/require_authentication";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Parent = () => (
    <div>
        <Route path="/" component={App} />
        <Route path='/resources' component={requireAuth(Resources)} />
    </div>
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Route path="/" component={Parent} />
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
