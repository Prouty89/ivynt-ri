import {
    GET_INVOICES,
    INVOICE_ERROR
}  from '../actions/types';

const initialState = {
    invoices: null,
    error: null,
}

export default(state = initialState, action) => {
switch(action.type) {
    case GET_INVOICES:
        return {
            ...state,
            invoices: action.payload,
        }
    case INVOICE_ERROR: 
    console.error(action.payload)
        return {
            ...state,
            error: action.payload
        };
    default: 
    return state;
    }
};