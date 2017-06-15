
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as thunkModule from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import * as Store from './store';


export default function configureStore(initialState?: Store.ApplicationState) {
    // build middleware. These are functions that can process the actions before they reach the store
    const thunk = (thunkModule as any).default; // sometimes typescript is not importing thunk module as expected
    
    // const createStoreWithMiddleware = compose(
    //     applyMiddleware(thunk, typedToPlain)
    // )(createStore);

    // combine all reducers and init states
    const allReducers = buildRootReducer(Store.reducers);
    const store = createStore(
        allReducers,
        applyMiddleware(thunk),
    );

    return store;
}

function buildRootReducer(allReducers: any) {
    return combineReducers(Object.assign({}, allReducers, { routing: routerReducer }));
}
