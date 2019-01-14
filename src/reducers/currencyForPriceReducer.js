export default (currency = 'USD', action) => {
  switch (action.type) {
    case 'CURRENCY_FOR_PRICE_SELECTED': 
      return action.payload;
    default:
      return currency;
  }
};