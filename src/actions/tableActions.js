import {
    GET_INVOICES,
    INVOICE_ERROR,
    SET_LOADING,
    GET_VENDORS,
    VENDOR_ERROR,
    // APPLY_CREDIT,
    // POST_PAYMENT, 
} from './types';

import store from '../store';



//Retrieve Invoices
export const getInvoices = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/invoices');
        const data = await res.json();
        dispatch({
            type: GET_INVOICES,
            payload: data
        })
    } 
    catch (err) {
        dispatch({
            type: INVOICE_ERROR,
            payload: err.response
        });
    }

};

// Retrieve Vendors
export const getVendors = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/vendors');
        const data = await res.json();
        dispatch({
            type: GET_VENDORS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: VENDOR_ERROR,
            payload: err.response
        });
    }
};

// Combine Call 2,3
export const combineCalls = () => [
    getInvoices(),
    getVendors()
  ];


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


// // Apply Credit
// export const addCredit = (credit) => async dispatch => {
//     try {
//         setLoading();
//         const res = await fetch('/credit/apply', {
//         method: 'POST',
//         body: JSON.stringify(credit),
//         headers: {
//             'Content-Type' : 'application-json'
//         }
//         });
//         const data = await res.json();
//         dispatch({
//             type: APPLY_CREDIT,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: CREDIT_ERROR,
//             payload: err.response
//         });
//     }
// };

// // Post a Payment
// export const addPayment = (payment) => async dispatch => {
//     try {
//         setLoading();
//         const res = await fetch('/payment', {
//         method: 'POST',
//         body: JSON.stringify(payment),
//         headers: {
//             'Content-Type' : 'application-json'
//         }
//         });
//         const data = await res.json();
//         dispatch({
//             type: POST_PAYMENT,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: PAYMENT_ERROR,
//             payload: err.response
//         });
//     }
// };