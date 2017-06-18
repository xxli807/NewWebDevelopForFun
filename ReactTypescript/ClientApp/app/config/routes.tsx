import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Layout } from '../share/layout';
import { Login } from '../features/login';
// import FetchData from './components/FetchData';
// import Counter from './components/Counter';

export default (
    <div>
        <Route path='/login' component={ Login } />
        <Route path='/' component={ Layout }>
            <Route path='counter' />
            <Route path='fetchdata'></Route>
        </Route>
    </div>
);