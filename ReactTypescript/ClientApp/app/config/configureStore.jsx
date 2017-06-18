import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as thunkModule from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import * as Store from './store';
export default function configureStore(initialState) {
    const thunk = thunkModule.default;
    const allReducers = buildRootReducer(Store.reducers);
    const store = createStore(allReducers, applyMiddleware(thunk));
    return store;
}
function buildRootReducer(allReducers) {
    return combineReducers(Object.assign({}, allReducers, { routing: routerReducer }));
}
//# sourceMappingURL=configureStore.jsx.map