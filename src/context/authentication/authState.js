import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../types';

const AuthState = props => {

    //States
    const initialState = {
        token: localStorage.getItem('token'),
        user: null,
        authenticated: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Functions


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                user: state.user,
                authenticated: state.authenticated,
                message: state.message
            }}
        >
            {props.children}
        </AuthContext.Provider>
   )
}
export default AuthState;