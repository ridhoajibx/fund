import axios from 'axios';
import Swal from 'sweetalert2';

const authActionTypes = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
}

const RegisterAuthActions = (userState, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/users/register", userState);
            const { data } = res;
            if (data.status === "Success") {
                dispatch({ type: authActionTypes.REGISTER_SUCCESS, payload: data });
                history.push('/');
            }
        } catch (error) {
            const errorMsg = error.response.data.msg
            dispatch({ type: authActionTypes.REGISTER_FAIL, payload: errorMsg })
        }
    }
}

const LoginAuthActions = (loginState, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/users/login", loginState);
            const { data } = res;
            if (data.status === "Success") {
                dispatch({ type: authActionTypes.LOGIN_SUCCESS, payload: data });
                history.push('/');
            }
        } catch (error) {
            const errorMsg = error.response.data.msg
            dispatch({ type: authActionTypes.LOGIN_FAIL, payload: errorMsg })
        }
    }
}

const LogOutAuthActions = (history) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Are you sure to logout?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                const success = 'Logout success!';
                dispatch({ type: authActionTypes.LOGOUT_SUCCESS, payload: success });
                history.push('/');
                Swal.fire({
                    title: 'Success',
                    icon: 'success'
                })
            }
        })
    }
}

export { RegisterAuthActions, LoginAuthActions, authActionTypes, LogOutAuthActions };