import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';

import { SHOW_ALERT, HIDE_ALERT } from "../types";

const AlertState = props => {
    const initialState = {
        alert: null,
    };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    //Functions
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        });
    };
    //Hide Alert after 8seconds
    setTimeout(() => {
        dispatch({
            type: HIDE_ALERT,
        });
    }, 8000);

    return (
        <alertContext.Provider
            value={{
                //State
                alert: state.alert,
                //Functions
                showAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;