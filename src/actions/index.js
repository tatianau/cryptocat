import coinmarketcap from '../apis/coinmarketcap';

const KEY = 'a91f97ac-dc9e-44d0-8b81-52109527f339';
const LIMIT = '20';

// FETCH CURRENCY LIST
export const fetchCurrency = () => {
  return async dispatch => {
    const response = await coinmarketcap.get(`/v1/cryptocurrency/map?CMC_PRO_API_KEY=${KEY}&limit=${LIMIT}`);
    dispatch({ type: 'FETCH_CURRENCY', payload: response.data.data });
  };
};

// ADD CURRENCY TO TABLE
const addCurrencyRow = (id) => {
  return { 
    type: 'ADD_TABLE_ROW',
    payload: {
      id: id
    }
  };
};

// REMOVE CURRENCY FROM TABLE
const removeCurrencyRow = (id) => {
  return { 
    type: 'REMOVE_TABLE_ROW',
    payload: {
      id: id
    }
  };
};

// SELECT CURRENCY DROPDOWN
const selectCurrencyDropdown = (value) => {
  return { 
    type: 'SELECT_DROPDOWN',
    payload: {
      value: value
    }
  };
};