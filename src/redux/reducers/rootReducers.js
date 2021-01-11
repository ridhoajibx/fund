import { combineReducers } from 'redux';
import authReducers from './authReducers';
import budgetReducers from './budgetReducers';

const rootReducer = combineReducers({
    auth: authReducers,
    budget: budgetReducers,
})

export default rootReducer;