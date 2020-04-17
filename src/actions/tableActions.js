import {
    GET_INVOICES,
    INVOICE_ERROR
    // GET_VENDORS,
    // APPLY_CREDIT,
    // POST_PAYMENT, 
} from './types';


//Retrieve Invoices
export const getInvoices = () => async dispatch => {
    try {
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


//Retrieve Vendors
// export const getVendors = () => async dispatch => {
//     try {
//         const res = await fetch('/vendors');
//         const data = await res.json();
//         dispatch({
//             type: GET_VENDORS,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: LOGS_ERROR,
//             payload: err.response
//         });
//     }
// };


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
//             type: LOGS_ERROR,
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
//             type: LOGS_ERROR,
//             payload: err.response
//         });
//     }
// };