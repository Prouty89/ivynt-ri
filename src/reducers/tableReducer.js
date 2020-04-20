import {
    GET_DATA,
    DATA_SUCCESS,
    DATA_SUCCESSTWO,
    DATA_FAIL,
    APPLY_CREDIT,
    CREDIT_SUCCESS,
    CREDIT_FAIL,
    APPLY_PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_FAIL
}  from '../actions/types';

const initialState = {
    invoices: [],
    vendors: [],
    loading: false,
    error: null,
    datas: [],
    seconddatas: [],
    credit: 0
}

const tableReducer = (state = initialState, action) => {

switch(action.type) {
    //Call 2 & 3
    case GET_DATA:
        return {
            ...state,
            loading: true
        }
    case DATA_SUCCESS:
        return {
            ...state,
            datas: action.payload,
            seconddatas: action.payload,
            loading: false,
        }
    case DATA_SUCCESSTWO:
        return {
            ...state,
            seconddatas: action.payload,
            loading: false,
        }
    case DATA_FAIL: 
    console.error(action.payload)
        return {
            ...state,
            error: action.payload
        };
    //credit availible with vendor??
    case APPLY_CREDIT:
        return {
            ...state,
            loading: true,
        }
    case CREDIT_SUCCESS:
        return {
            ...state,
            credit: [...state.credit, action.payload],
            loading: false,
        }
    case CREDIT_FAIL: 
    console.error(action.payload)
        return {
            ...state,
            error: action.payload
        };
    //Is there still a partial payment amount?
    case APPLY_PAYMENT:
        return {
            ...state,
            loading: true,
        }
    case PAYMENT_SUCCESS:
        return {
            ...state,
            payment: [...state.payment, action.payload],
            loading: false,
        }
    case PAYMENT_FAIL: 
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