import{
    GET_INVOICES,
    INVOICES_SUCCESS,
    INVOICES_FAIL,
    GET_VENDORS,
    VENDORS_SUCCESS,
    VENDORS_FAIL,
    POST_CREDIT,
    CREDIT_SUCCESS,
    CREDIT_FAIL,
    POST_PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_FAIL,
    DATA_SUCCESS
} from './types'

import { 
    axiosCallOne, 
    axiosCallTwo 
} from "../config/apiConfig";



export const getInvoices = () => async dispatch => {
    try {
        dispatch({
            type: GET_INVOICES
        })
        const res = await fetch('/invoices');
        const data = await res.json();
        dispatch({
            type: INVOICES_SUCCESS,
            payload: data
        })
        // data.map((val)=> console.log(val));
    } catch (err) {
        dispatch({
            type: INVOICES_FAIL,
            payload: err.response
        });
    }
};


export const collectData = () => async dispatch => {
axiosCallOne()
    .get()
    .then(res => {
        dispatch({type: DATA_SUCCESS, payload: res.data})
        console.log("CallOne",res.data)
    })
    axiosCallTwo()
    .get()
    .then(res => {
        const data = res.data
        dispatch({type: DATA_SUCCESS, payload: data})
        console.log("CallTwo",data)
    })
}



// export const getInvoices = () => {
//    return dispatch => {
//     dispatch({type: GET_INVOICES});
//     console.log('status')
//     axios()
//     .get('/invoices')
//     .then(res => {
//         dispatch({type: INVOICES_SUCCESS, payload: res})
//         console.log(res.data)
//     })
//     .catch(error => 
//         dispatch({type: INVOICES_FAIL, payload: error}))
//         console.log("error")
//     };
// };



// import {
//     SET_DATA,
//     DATA_ERROR,
//     GET_INVOICES,
//     GET_VENDORS
// } from './types';

// import axios from 'axios';

// import  { axiosCallOne, axiosCallTwo } from '../config/apiConfig';


// export const collectData = () => async dispatch => {

//     try {
//         const res = await fetch('/invoices')
//         const data = await res.json();
//         dispatch({
//             type: SET_DATA, payload: data
//         })
//         console.log("payload", data)
//     } catch(err) {
//         dispatch({
//             type:DATA_ERROR,
//             payload: err.response
//         })
//         console.log("errorrr")
//     }
// }

    // axiosCallOne()
    // .get()
    // .then(res => {
    //     const data = res.data[0]
    //     dispatch({type: SET_DATA, payload: data})
    //     console.log(data.invoiceId)
    // })
    // axiosCallTwo()
    // .get()
    // .then(res => {
    //     dispatch({type: SET_DATA, payload: res.data})
    // })




// import RequestBase from '../config/apiConfig';

// let one = '/invoices';
// let two = '/vendors';



// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);

// axios.interceptors.response.use(response => response.data)

// export function collectData(){
//     return function(dispatch) {
//         return { data } = axios.all([requestOne, requestTwo])
//         .then(axios.spread((...res) => {
//             const resOne = res[0];
//             const resTwo = res[1];
//             dispatch(setData({resOne, resTwo}))
//             console.log(resTwo, resOne)
//         }))
//         .catch((err) =>
//         console.log("There's been an error", err)
//         )
        
//     }
// }

// let one = '/invoices';
// let two = '/vendors';

// const RequestBase = () => { 
//     axios.all([
//     axios.get(one),
//     axios.get(two)
//     ])
//   };

// export const collectData = () => dispatch => {
  
//     .then(axios.spread((resOne, resTwo)=> {
//         console.log('Date created: ', resOne.data.created_at);
//         console.log('Date created:' , resTwo.data.created_at);
//         dispatch({type: SET_DATA, payload: resOne})
//     }))
//     .catch(err => {
//         console.log("There's been an error", err)
//     })
// }



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