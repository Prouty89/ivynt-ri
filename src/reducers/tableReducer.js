import {
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
    PAYMENT_FAIL
}  from '../actions/types';

const initialState = {
    invoices: [],
    vendors: [],
    loading: false,
    error: null,
}

const tableReducer = (state = initialState, action) => {

switch(action.type) {
    case GET_INVOICES:
        return {
            ...state,
            loading: true
        }
    case INVOICES_SUCCESS:
        return {
            ...state,
            invoices: action.payload,
            loading: false,
        }
    case INVOICES_FAIL: 
    console.error(action.payload)
        return {
            ...state,
            error: action.payload
        };
    default: 
    return state;
    }
};

export default tableReducer;