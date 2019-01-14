import { combineReducers } from 'redux';
import dropdownReducer from './dropdownReducer';
import tableReducer from './tableReducer';

export default combineReducers({
  dropdownList: dropdownReducer,
  tableList: tableReducer
});