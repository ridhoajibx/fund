import axios from "axios";
import { authActionTypes } from "../actions/authActions";

const authState = {
    isLoggedin: false,
    user: {
        id: null,
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        updatedAt: '',
        createdAt: '',
        photo: ''
    },
    token: "",
    errors: ""
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
            };
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            localStorage.setItem("auth", JSON.stringify(newAuthState))
            return newAuthState;
            
        case authActionTypes.LOGOUT_SUCCESS:
            const LogOutAuthState = {
                isLoggedin: false,
                user: {},
                token: "",
            };
            localStorage.removeItem("auth");
            return LogOutAuthState;

        case authActionTypes.REGISTER_FAIL:
            return state

        case authActionTypes.LOGIN_SUCCESS:
            const loginAuthState = {
                isLoggedin: true,
                user: action.payload.userData,
                token: action.payload.access_token,
            };
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            localStorage.setItem("auth", JSON.stringify(loginAuthState))
            return loginAuthState;

        case authActionTypes.LOGIN_FAIL:
            const authState = {
                isLoggedin: false,
                errors: action.payload
            };
            return authState;
        default:
            return state;
    }
}

export default authReducers;