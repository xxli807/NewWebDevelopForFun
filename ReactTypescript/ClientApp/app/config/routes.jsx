import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from '../share/layout';
import { Login } from '../features/login';
export default (<div>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Layout}>
            <Route path='counter'/>
            <Route path='fetchdata'></Route>
        </Route>
    </div>);
//# sourceMappingURL=routes.jsx.map