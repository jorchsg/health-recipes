import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
            }
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
            }
        case LOGIN_ERROR: {
            return {
                ...state,
                message: action.payload
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}