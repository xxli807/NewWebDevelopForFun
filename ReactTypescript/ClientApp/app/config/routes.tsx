import * as React from 'react';
import { Router, Route } from 'react-router';
import { Layout } from '../share/Layout';
// import Home from './components/Home';
// import FetchData from './components/FetchData';
// import Counter from './components/Counter';

export default <Route component={ Layout }>
    <Route path='/' />
    <Route path='/counter' />
    <Route path='/fetchdata'></Route>
</Route>;
