import { combineReducers } from 'redux';
import  tableReducer  from './tableReducer';

export default combineReducers({
    // invoice: tableReducer,
    data: tableReducer,
    // seconddata: tableReducer,
    // vendor: tableReducer
});