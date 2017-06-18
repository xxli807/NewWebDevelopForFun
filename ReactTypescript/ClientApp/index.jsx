import './app/css/site.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './app/config/routes';
import configureStore from './app/config/configureStore';
const initialState = window.initialReduxState;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render((<Provider store={store}>
      <Router history={history} children={routes}/>
    </Provider>), document.getElementById('app'));
//# sourceMappingURL=index.jsx.map