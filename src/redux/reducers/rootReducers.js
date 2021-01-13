import { combineReducers } from 'redux';
import authReducers from './authReducers';
import budgetReducers from './budgetReducers';
import expenseReducers from './expenseReducers';

const rootReducer = combineReducers({
    auth: authReducers,
    budget: budgetReducers,
    expense: expenseReducers,
})

export default rootReducer;