
import React from 'react';
// import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(
    // allReducers,
    applyMiddleware(thunk)
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
