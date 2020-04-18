import {
    SET_DATA
} from './types';

import axios from 'axios';
import  { axiosCallOne, axiosCallTwo } from '../config/apiConfig';





export const collectData = () => dispatch => {
    axiosCallOne()
    .get()
    .then(res => {
        dispatch({type: SET_DATA, payload: res.data})
        console.log(res.data)
    })
    axiosCallTwo()
    .get()
    .then(res => {
        dispatch({type: SET_DATA, payload: res.data})
        console.log(res.data)
    })
}













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