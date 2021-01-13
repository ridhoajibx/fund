import { expenseActionTypes } from "../actions/expenseActions";

const expenseState = {
    total: {},
    expensesUser: [],
    errorsExpenses: ""
}
const expenseReducers = (state = expenseState, action) => {
    switch (action.type) {
        case expenseActionTypes.EXPENSE_BYBUDGET_SUCCESS:
            return {
                ...state,
                total: action.payload
            }

        case expenseActionTypes.EXPENSE_SUCCESS:
            return {
                ...state,
                expensesUser: action.payload
            }
        default:
            return state;
    }
}

export default expenseReducers;