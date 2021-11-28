import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../types';

const alertReducer = (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false,
            }
        case LOGIN_ERROR:
        case LOGOUT:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload,
                authenticated: null,
                user: null,
                loading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false,
            }
        case GET_USER: {
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false,
            }
        }
        default:
            return state;
    }
}

export default alertReducer;