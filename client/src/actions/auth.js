import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate('/')
    } catch(error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        console.log("actions test1")
        const { data } = await api.signUp(formData);
        console.log("actions test2")

        dispatch({ type: AUTH, data });

        navigate('/')
    } catch(error) {
        console.log(error);
    }
};