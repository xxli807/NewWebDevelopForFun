
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './app/config/routes';
import configureStore from './app/config/configureStore';
import { ApplicationState }  from './app/config/store';

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render((
    <Provider store={store}>
      <Router history={history} children={routes}/>
    </Provider>
), document.getElementById('app'));

