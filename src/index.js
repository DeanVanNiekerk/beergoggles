import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './stores/configureStore';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement);

registerServiceWorker();
