import { combineReducers } from 'redux';
import dropdownReducer from './dropdownReducer';
import tableReducer from './tableReducer';
import detailReducer from './detailReducer';
import currencyForPriceReducer from './currencyForPriceReducer';

export default combineReducers({
  dropdownList: dropdownReducer,
  tableList: tableReducer,
  detailList: detailReducer,
  selectedCurrencyForPrice: currencyForPriceReducer
});