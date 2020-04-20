import{
    APPLY_CREDIT,
    CREDIT_SUCCESS,
    CREDIT_FAIL,
    APPLY_PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_FAIL,
    GET_DATA,
    DATA_SUCCESS,
    DATA_SUCCESSTWO
} from './types'

import { 
    axiosCallOne, 
    axiosCallTwo 
} from "../config/apiConfig";





//Promise.all, or merge data as soon as you have it. 
export const collectData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  axiosCallOne()
  .get()
  .then((res) => {
    dispatch({ type: DATA_SUCCESS, payload: res.data });
    console.log("CallOne", res.data);
  });
  axiosCallTwo()
  .get()
  .then((res) => {
    dispatch({ type: DATA_SUCCESSTWO, payload: res.data });
    console.log("CallTwo", res.data);
  });
};

export const addCredit = (credit) => async dispatch => {
    dispatch({ type: APPLY_CREDIT });
    try {
        const res = await fetch('/credit/apply', {
        method: 'POST',
        body: JSON.stringify(credit),
        headers: {
            'Content-Type' : 'application-json'
        }
        });
        const data = await res.json();
        dispatch({
            type: CREDIT_SUCCESS,
            payload: data
        })
        console.log("CREDIT:", data)
    } catch (err) {
        dispatch({
            type: CREDIT_FAIL,
            payload: err.response
        });
    }
};

export const addPayment = (payment) => async dispatch => {
    dispatch({ type: APPLY_PAYMENT });
    try {
        const res = await fetch('/payment', {
        method: 'POST',
        body: JSON.stringify(payment),
        headers: {
            'Content-Type' : 'application-json'
        }
        });
        const data = await res.json();
        dispatch({
            type: PAYMENT_SUCCESS,
            payload: data
        })
        console.log("PAYMENT:", data)
    } catch (err) {
        dispatch({
            type: PAYMENT_FAIL,
            payload: err.response
        });
    }
};

