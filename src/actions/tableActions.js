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
    GET_DATA,
    DATA_SUCCESS,
    DATA_SUCCESSTWO
} from './types'

import { 
    axiosCallOne, 
    axiosCallTwo 
} from "../config/apiConfig";



// export const getInvoices = () => async dispatch => {
//     try {
//         dispatch({
//             type: GET_INVOICES
//         })
//         const res = await fetch('/invoices');
//         const data = await res.json();
//         dispatch({
//             type: INVOICES_SUCCESS,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: INVOICES_FAIL,
//             payload: err.response
//         });
//     }
// };

// export const getVendors = () => async dispatch => {
//     try {
//         dispatch({
//             type: GET_VENDORS
//         })
//         const res = await fetch('/vendors');
//         const data = await res.json();
//         dispatch({
//             type: VENDORS_SUCCESS,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: VENDORS_FAIL,
//             payload: err.response
//         });
//     }
// };

//Promise.all for handling redux-promises


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

// Promise.all(
//     [...new Array(3)].map((ignore,i)=>i === 0 ? 0 : (i + "01"))
//     .map(
//       start=>axios.get(`${api_root_url}/v1/?start=${start}`)
//     )  
//   ).then(
//     results=>results.forEach(
//       result=>
//         dispatch({type: FETCH_DATA_SUCESS, payload: result.data})
//       )
//   )

//   axiosCallOne()
//     .get()
//     .then((res) => {
//       dispatch({ type: DATA_SUCCESS, payload: res.data });
//       console.log("CallOne", res.data);
//     });
//     axiosCallTwo()
//     .get()
//     .then((res) => {
//       dispatch({ type: DATA_SUCCESSTWO, payload: res.data });
//       console.log("CallTwo", res.data);
//     });