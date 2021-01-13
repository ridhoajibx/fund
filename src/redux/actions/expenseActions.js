import axios from 'axios';
import { swalWithTWButton } from '../../components/Button/swalWithTWButton';
import { authActionTypes } from "./authActions";

const expenseActionTypes = {
    EXPENSE_BYBUDGET_SUCCESS: "EXPENSE_BYBUDGET_SUCCESS",
    EXPENSE_BYBUDGET_FAIL: "EXPENSE_BYBUDGET_FAIL",
    EXPENSE_SUCCESS: "EXPENSE_SUCCESS",
    EXPENSE_FAIL: "EXPENSE_FAIL",
    ADD_EXPENSE_SUCCESS: "ADD_EXPENSE_SUCCESS",
    ADD_EXPENSE_FAIL: "ADD_EXPENSE_FAIL",
    UPDATE_EXPENSE_SUCCESS: "UPDATE_EXPENSE_SUCCESS",
    UPDATE_EXPENSE_FAIL: "UPDATE_EXPENSE_FAIL",
    DELETE_EXPENSE_SUCCESS: "DELETE_EXPENSE_SUCCESS",
    DELETE_EXPENSE_FAIL: "DELETE_EXPENSE_FAIL",
}

const getExpenseTotalActions = () => {
    const auth = localStorage.getItem("auth");
    const authObj = JSON.parse(auth);
    const { token } = authObj;
    if (token) {
        const header = {
            headers: {
                'access_token': token
            }
        }
        return async (dispatch) => {
            try {
                const res = await axios.get("/expenses/totalbybudget", header);
                const { data } = res;
                if (res.status === 200) {
                    dispatch({ type: expenseActionTypes.EXPENSE_BYBUDGET_SUCCESS, payload: data });
                } else {
                    throw res
                }
            } catch (error) {
                console.log(error.response.data, 'cek error');
                const errorMsg = error.response.data;
                if (errorMsg.msg ) {
                    dispatch({ type: expenseActionTypes.EXPENSE_BYBUDGET_FAIL, payload: errorMsg.msg });
                    swalWithTWButton.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: errorMsg.msg
                    });
                } else if (errorMsg.message === "jwt expired") {
                    dispatch({ type: authActionTypes.USER_FAIL, payload: errorMsg.message });
                }
            }
        }
    }
}

const getExpensesActions = () => {
    const auth = localStorage.getItem("auth");
    const authObj = JSON.parse(auth);
    const { token } = authObj;
    if (token) {
        const header = {
            headers: {
                'access_token': token
            }
        }
        return async (dispatch) => {
            try {
                const res = await axios.get("/expenses/", header);
                const { data } = res;
                if (res.status === 200) {
                    dispatch({ type: expenseActionTypes.EXPENSE_SUCCESS, payload: data });
                } else {
                    throw res;
                }
            } catch (error) {
                const errorMsg = error.response.data;
                if (errorMsg.msg) {
                    dispatch({ type: expenseActionTypes.EXPENSE_FAIL, payload: errorMsg.msg })
                    swalWithTWButton.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: `${errorMsg.msg}`
                    });
                } else if (errorMsg.message === "jwt expired") {
                    dispatch({ type: authActionTypes.USER_FAIL, payload: errorMsg.message });
                }
            }
        }
    }
}

export { getExpenseTotalActions, getExpensesActions, expenseActionTypes };