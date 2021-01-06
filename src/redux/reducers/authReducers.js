import axios from "axios";
import { authActionTypes } from "../actions/authActions";

const authState = {
    isLoggedin: false,
    user: {},
    token: "",
    errorsLogin: "",
    errorsRegister: "",
    errorsUser: ""
}

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        const authobj = JSON.parse(auth)
        const { token } = authobj;
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return authobj;
        }
        return authState;
    } catch (error) {
        return authState;
    }
}
const newAuth = getAuthState();
const authReducers = (state = newAuth, action) => {
    switch (action.type) {
        case authActionTypes.REGISTER_SUCCESS:
            const newAuthState = {
                isLoggedin: true,
                user: action.payload.user,
                token: action.payload.access_token,
                errorsLogin: "",
                errorsRegister: ""
            };
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            localStorage.setItem("auth", JSON.stringify(newAuthState))
            return newAuthState;

        case authActionTypes.REGISTER_FAIL:
            const registerFailState = {
                isLoggedin: false,
                errorsRegister: action.payload,
                errorsLogin: "",
                token: ""
            };
            return registerFailState

        case authActionTypes.LOGIN_SUCCESS:
            const loginAuthState = {
                isLoggedin: true,
                user: action.payload.userData,
                token: action.payload.access_token,
                errorsLogin: "",
                errorsRegister: ""
            };
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            localStorage.setItem("auth", JSON.stringify(loginAuthState))
            return loginAuthState;

        case authActionTypes.LOGIN_FAIL:
            const loginFailState = {
                isLoggedin: false,
                errorsLogin: action.payload,
                errorsRegister: ""
            };
            return loginFailState;

        case authActionTypes.USER_SUCCESS:
            const userAuthState = {
                isLoggedin: true,
                user: {
                    id: action.payload.data.id,
                    name: action.payload.data.name,
                    password: action.payload.data.password,
                    dateOfBirth: action.payload.data.dateOfBirth,
                    photo: action.payload.data.photo,
                    email: action.payload.data.email,
                    createdAt: action.payload.data.createdAt,
                    updatedAt: action.payload.data.updatedAt
                },
                token: action.payload.token,
                errorsLogin: "",
                errorsRegister: "",
                errorsUser: ""
            };
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
            localStorage.setItem("auth", JSON.stringify(userAuthState))
            return userAuthState;

        case authActionTypes.USER_FAIL:
            const userFailState = {
                ...state,
                errorsUser: action.payload
            };
            return userFailState;

        case authActionTypes.LOGOUT_SUCCESS:
            const LogOutAuthState = {
                isLoggedin: false,
                user: {},
                token: "",
                errorsLogin: "",
                errorsRegister: ""
            };
            localStorage.removeItem("auth");
            return LogOutAuthState;
        default:
            return state;
    }
}

export default authReducers;