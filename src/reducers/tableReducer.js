import {
    GET_INVOICES,
    INVOICE_ERROR,
    GET_VENDORS,
    VENDOR_ERROR,
    SET_LOADING,
    
}  from '../actions/types';

const initialState = {
    invoices: null,
    vendors: null,
    loading: false,
    error: null,
}

export default(state = initialState, action) => {
switch(action.type) {
    case GET_INVOICES:
        return {
            ...state,
            invoices: action.payload,
            loading: false
        }
    case INVOICE_ERROR: 
    console.error(action.payload)
        return {
            ...state,
            error: action.payload
        };
    case GET_VENDORS:
    return {
        ...state,
        vendors: action.payload,
        loading: false
    }
    case VENDOR_ERROR: 
    console.error(action.payload)
        return {
            ...state,
            error: action.payload
        };
    case SET_LOADING:
        return{
            ...state,
            loading: true
        };
    default: 
    return state;
    }
};