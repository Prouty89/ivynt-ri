import {
    SET_DATA
} from './types';

import axios from 'axios';

let one = '/invoices';
let two = '/vendors';

const requestOne = axios.get(one);
const requestTwo = axios.get(two);

export function collectData(){
    return function(dispatch) {
        return axios.all([requestOne, requestTwo])
        .then(axios.spread((...res) => {
            const resOne = res[0]
            const resTwo = res[1]
            dispatch(setData(resOne, resTwo))
            console.log(resOne, resTwo)
        }))
        .catch((err) =>
        console.log("There's been an error", err)
        )
        
    }
}

export function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    }
};

//Retrieve Invoices
// export const getInvoices = () => async dispatch => {
//     try {
//         setLoading();
//         const res = await Promise.all(urls.map(url =>
//             fetch(url)
//             )) 
//         const data = await res.json();
//         dispatch({
//             type: GET_INVOICES,
//             payload: console.log("data",data)
//         })
//     } 
//     catch (err) {
//         dispatch({
//             type: INVOICE_ERROR,
//             payload: err.response
//         });
//     }

// };

// // Retrieve Vendors
// export const getVendors = () => async dispatch => {
//     try {
//         setLoading();
//         const res = await fetch('/vendors');
//         const data = await res.json();
//         dispatch({
//             type: GET_VENDORS,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: VENDOR_ERROR,
//             payload: err.response
//         });
//     }
// };


// export const setLoading = () => {
//     return {
//         type: SET_LOADING
//     }
// }


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