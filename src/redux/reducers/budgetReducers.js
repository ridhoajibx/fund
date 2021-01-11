import { budgetActionTypes } from "../actions/budgetActions";

const budgetState = {
    budgets: [],
    errorsBudgets: ""
}
const budgetReducers = (state = budgetState, action) => {
    switch (action.type) {
        case budgetActionTypes.BUDGET_SUCCESS:
            return {
                ...budgetState,
                budgets: action.payload
            }

        case budgetActionTypes.BUDGET_FAIL:
            return {
                ...budgetState,
                errorsBudgets: action.payload
            };

        case budgetActionTypes.ADD_BUDGET_SUCCESS:
            return {
                ...budgetState,
                budgets: action.payload
            }

        case budgetActionTypes.ADD_BUDGET_FAIL:
            return {
                ...budgetState,
                errorsBudgets: action.payload
            };

        case budgetActionTypes.DELETE_BUDGET_SUCCESS:
            return {
                ...budgetState,
                budgets: []
            };

        case budgetActionTypes.DELETE_BUDGET_FAIL:
            return state;
        default:
            return state;
    }
}

export default budgetReducers;