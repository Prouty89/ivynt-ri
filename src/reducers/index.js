import { combineReducers } from 'redux';
import  tableReducer  from './tableReducer';
// import configReducer from './configReducer';

export default combineReducers({
    table: tableReducer,
    // config: configReducer
});