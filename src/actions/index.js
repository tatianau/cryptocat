import coinmarketcap from '../apis/coinmarketcap';

const KEY = 'a91f97ac-dc9e-44d0-8b81-52109527f339';
const TOTALLIMIT = '20';
const TABLELIMIT = '5';

// FETCH CURRENCY TABLE
export const fetchTable = () => {
  return async dispatch => {
    const response = await coinmarketcap.get(`/v1/cryptocurrency/map?CMC_PRO_API_KEY=${KEY}&limit=${TABLELIMIT}`);
    dispatch({ type: 'FETCH_TABLE', payload: response.data.data });
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
export const selectDropdown = (value) => {
  return { 
    type: 'SELECT_DROPDOWN',
    payload: value
  };
};