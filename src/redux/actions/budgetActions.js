import axios from 'axios';
import { swalWithTWButton } from '../../components/Button/swalWithTWButton';

const budgetActionTypes = {
    BUDGET_SUCCESS: "BUDGET_SUCCESS",
    BUDGET_FAIL: "BUDGET_FAIL",
    ADD_BUDGET_SUCCESS: "ADD_BUDGET_SUCCESS",
    ADD_BUDGET_FAIL: "ADD_BUDGET_FAIL",
    UPDATE_BUDGET_SUCCESS: "UPDATE_BUDGET_SUCCESS",
    UPDATE_BUDGET_FAIL: "UPDATE_BUDGET_FAIL",
    DELETE_BUDGET_SUCCESS: "DELETE_BUDGET_SUCCESS",
    DELETE_BUDGET_FAIL: "DELETE_BUDGET_FAIL",
}

const getBudgetActions = () => {
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
                const res = await axios.get("/budget", header);
                const { data } = res;
                if (res.status === 200) {
                    dispatch({ type: budgetActionTypes.BUDGET_SUCCESS, payload: data });
                } else {
                    throw res
                }
            } catch (error) {
                console.log(error.response.data.message, 'cek error');
                const errorMsg = error.response.data.message;
                dispatch({ type: budgetActionTypes.BUDGET_FAIL, payload: errorMsg })
                if (errorMsg === "jwt expired") {
                    swalWithTWButton.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: `Sorry ! ${errorMsg}, you must be reloggin!`
                    });
                } else {
                    swalWithTWButton.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: `${errorMsg}`
                    });
                }
            }
        }
    }
}

const addBudgetActions = (state) => {
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
                const res = await axios.post("/budget/add", state, header);
                const { data } = res;
                if (res.status === 200) {
                    dispatch({ type: budgetActionTypes.ADD_BUDGET_SUCCESS, payload: data });
                    swalWithTWButton.fire({
                        icon: 'success',
                        title: 'Great!',
                        text: 'Budget added'
                    });
                }
            } catch (error) {
                console.log(error.response, 'cek error');
                const errorMsg = error.response.data.message;
                dispatch({ type: budgetActionTypes.ADD_BUDGET_FAIL, payload: errorMsg });
                if (errorMsg === "jwt expired") {
                    swalWithTWButton.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: `Sorry ! ${errorMsg}, you must be reloggin!`
                    });
                } else {
                    swalWithTWButton.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: `Sorry ! ${errorMsg}, cannot input budget twice!`
                    });
                }
            }
        }
    }
}

const updateBudgetActions = (state) => {
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
                const res = await axios.put(`/budget/edit`, state, header);
                if (res.status === 200) {
                    dispatch({ type: budgetActionTypes.UPDATE_BUDGET_SUCCESS });
                    swalWithTWButton.fire({
                        icon: 'success',
                        title: 'Great!',
                        text: 'Budget updated'
                    });
                } else {
                    throw res;
                }
            } catch (error) {
                const errorMsg = error.response.data.msg;
                dispatch({ type: budgetActionTypes.UPDATE_BUDGET_FAIL });
                swalWithTWButton.fire({
                    icon: 'error',
                    title: 'Opps!',
                    text: `${errorMsg}`
                });
            }
        }
    }
}

const deleteBudgetActions = () => {
    const auth = localStorage.getItem("auth");
    const authObj = JSON.parse(auth);
    const { token } = authObj;
    if (token) {
        const header = {
            headers: {
                'access_token': token
            }
        }
        return (dispatch) => {
            swalWithTWButton.fire({
                title: 'Delete budget!',
                text: "Are you sure to delete your budget?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete("/budget/delete", header)
                        .then(response => {
                            dispatch({ type: budgetActionTypes.DELETE_BUDGET_SUCCESS });
                            swalWithTWButton.fire({
                                title: 'Success',
                                icon: 'success',
                                text: 'Your budget has been deleted!'
                            })
                        })
                        .catch(error => {
                            const errorMsg = error.data.msg;
                            dispatch({ type: budgetActionTypes.DELETE_BUDGET_SUCCESS, payload: errorMsg })
                            swalWithTWButton.fire({
                                icon: 'error',
                                title: 'Opps!',
                                text: `${errorMsg}`
                            });
                            console.log(errorMsg, 'cek error delete budget');
                        })
                }
            })
        }
    }
}

export { getBudgetActions, addBudgetActions, updateBudgetActions, deleteBudgetActions, budgetActionTypes };