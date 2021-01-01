import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducers from './reducers/authReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    authReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;