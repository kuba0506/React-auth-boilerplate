import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        // redux thunk allows for returning different type than object
        // this enable to dispatch many actions
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
        
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use!' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER, // flip value from token to ''
        payload: ''
    }
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps);
        // redux thunk allows for returning different type than object
        // this enable to dispatch many actions
        dispatch({ type: AUTH_USER, payload: response.data.token });
        dispatch({ type: AUTH_ERROR, payload: '' });
        localStorage.setItem('token', response.data.token);
        callback();

    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid credentials!' });
    }
};