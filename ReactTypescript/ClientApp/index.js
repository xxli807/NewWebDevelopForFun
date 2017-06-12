
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/Root';

// global settings
window.API_BASE = window.API_BASE || '';


window.onload = () => {
  ReactDOM.render((
    <Root />
  ), document.getElementById('app'));
};
