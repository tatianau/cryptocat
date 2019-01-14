import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import dropdownReducer from './dropdownReducer';
import tableReducer from './tableReducer';

export default combineReducers({
  currencies: currencyReducer,
  dropdownList: dropdownReducer,
  tableList: tableReducer
});