import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
//import axiosClient from '../../config/axios';
import axios from 'axios';
import tokenAuth from '../../config/tokenAuth';

import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../types';

const AuthState = props => {
    const url = process.env.REACT_APP_BACKEND_URL
    //States
    const initialState = {
        token: localStorage.getItem('token'),
        user: null,
        authenticated: null,
        message: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Functions
    const registerUser = async data => {
        try {
            const response = await axios.post(`${url}users/signup`, data);
            console.log(response);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.error(error.response.data.message);
            const alert = {
                msg: error.response.data.message,
                category: 'alert-error'
            }
            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        }
        //Get User
        getAuthUser();
    }

    const getAuthUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        try {
            const response = await axios.get(`${url}users/getUser`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(response);
            dispatch({
                type: GET_USER,
                payload: response.data.data
            });
        } catch (error) {
            console.error(error.response);
            dispatch({
                type: LOGIN_ERROR,
            });
        }
    }

    const login = async (data) => {
        try {
            const response = await axios.post(`${url}users/login`, data);
            console.log('Login Response', response);
        } catch (error) {
            console.error('Login Error: ', error.response.data.message);
            const alert = {
                msg: error.response.data.message,
                category: 'alert-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    return (
        <AuthContext.Provider
            value={{
                //States
                token: state.token,
                user: state.user,
                authenticated: state.authenticated,
                message: state.message,
                //Functions
                registerUser,
                login
            }}
        >
            {props.children}
        </AuthContext.Provider>
   )
}
export default AuthState;