import coinmarketcap from '../apis/coinmarketcap';

const KEY = 'a91f97ac-dc9e-44d0-8b81-52109527f339';
const TOTALLIMIT = '100';
const TABLELIMIT = '5';

// FETCH CURRENCY TABLE
export const fetchTable = () => {
  return async dispatch => {
    const response = await coinmarketcap.get(`/v1/cryptocurrency/map?CMC_PRO_API_KEY=${KEY}&limit=${TABLELIMIT}`);
    dispatch({ type: 'FETCH_TABLE', payload: response.data.data });
  };
};

// FETCH CURRENCY TABLE DETAILS
export const fetchTableDetail = (id, curConvert = 'USD') => {
  return async dispatch => {
    const response = await coinmarketcap.get(`/v1/cryptocurrency/quotes/latest?id=${id}&convert=${curConvert}&CMC_PRO_API_KEY=${KEY}`);
    dispatch({ type: 'FETCH_TABLE_DETAIL', payload: response.data.data[`${id}`] });
  };
};

// FETCH CURRENCY DROPDOWN
export const fetchDropdown = () => {
  return async dispatch => {
    const response = await coinmarketcap.get(`/v1/cryptocurrency/map?CMC_PRO_API_KEY=${KEY}&limit=${TOTALLIMIT}`);
    dispatch({ type: 'FETCH_DROPDOWN', payload: response.data.data });
  };
};

// ADD CURRENCY TO TABLE
export const addCurrencyRow = (id) => {
  return { 
    type: 'ADD_TABLE_ROW',
    payload: id
  };
};

// REMOVE CURRENCY FROM TABLE
export const removeCurrencyRow = (id) => {
  return { 
    type: 'REMOVE_TABLE_ROW',
    payload: id
  };
};

// SELECT CURRENCY DROPDOWN
export const removeFromDropdown = (value) => {
  return { 
    type: 'REMOVE_FROM_DROPDOWN',
    payload: value
  };
};

// ADD TO CURRENCY DROPDOWN
export const addToDropdown = (item) => {
  return { 
    type: 'ADD_TO_DROPDOWN',
    payload: item
  };
};

// SELECT PRICE DROPDOWN
export const selectCurrencyPrice = curValue => {
  return {
    type: 'CURRENCY_FOR_PRICE_SELECTED',
    payload: curValue
  };
};