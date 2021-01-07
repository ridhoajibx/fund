import axios from 'axios';
import { swalWithTWButton } from '../../components/Button/swalWithTWButton';

const authActionTypes = {
    USER_SUCCESS: "USER_SUCCESS",
    USER_FAIL: "USER_FAIL",
    UPDATE_USER: "UPDATE_USER",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
}

const RegisterAuthActions = (registerState, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/users/register", registerState);
            const { data } = res;
            if (data.status === "Success") {
                dispatch({ type: authActionTypes.REGISTER_SUCCESS, payload: data });
                history.push('/settings');
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
                history.push('/settings');
            }
        } catch (error) {
            const errorMsg = error.response.data.msg
            dispatch({ type: authActionTypes.LOGIN_FAIL, payload: errorMsg })
        }
    }
}

const LogOutAuthActions = (history) => {
    return (dispatch) => {
        swalWithTWButton.fire({
            title: 'Are you sure to logout?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                const success = 'Logout success!';
                dispatch({ type: authActionTypes.LOGOUT_SUCCESS, payload: success });
                history.push('/auth/login');
                swalWithTWButton.fire({
                    title: 'Success',
                    icon: 'success'
                })
            }
        })
    }
}

const userActions = () => {
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
                const res = await axios.get("/users/profile", header);
                const { data } = res;
                if (res.status === 200) {
                    dispatch({ type: authActionTypes.USER_SUCCESS, payload: { data, token } });
                } else {
                    throw res
                }
            } catch (error) {
                console.log(error, 'cek error');
                const errorMsg = error.response.data.message;
                dispatch({ type: authActionTypes.USER_FAIL, payload: errorMsg })
            }
        }
    }
}

const updateUserActions = (userState) => {
    const auth = localStorage.getItem("auth");
    const authObj = JSON.parse(auth);
    const { token } = authObj;
    if (token) {
        return async () => {
            const header = {
                headers: {
                    'access_token': token
                }
            }
            try {
                const res = await axios.put("/users/editprofile", userState, header);
                if (res.status === 200) {
                    swalWithTWButton.fire({
                        icon: 'success',
                        title: 'Great!',
                        text: res.data.msg
                    });
                } else {
                    throw res
                }
            } catch (error) {
                swalWithTWButton.fire({
                    icon: 'error',
                    title: 'Ops!',
                    text: error.data.msg
                });
            }
        }
    }
}

const updatePhotoUserActions = (file) => {
    const auth = localStorage.getItem("auth");
    const authObj = JSON.parse(auth);
    const { token } = authObj;
    let data = new FormData();
    data.append('photo', file)
    if (token) {
        return async () => {
            const header = {
                headers: {
                    'access_token': token
                }
            }
            try {
                const res = await axios.put("/users/editphoto", data, header);
                if (res.status === 200) {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        swalWithTWButton.fire({
                            title: 'Your uploaded picture',
                            imageUrl: e.target.result,
                            imageAlt: 'The uploaded picture'
                        })
                    }
                    reader.readAsDataURL(file)
                } else {
                    throw res
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
}

export { RegisterAuthActions, LoginAuthActions, userActions, updateUserActions, updatePhotoUserActions, authActionTypes, LogOutAuthActions };