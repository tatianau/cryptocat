export default (details = [], action) => {
  switch (action.type) {
    case 'FETCH_TABLE_DETAIL': 
      return [...details, action.payload];
    default:
      return details;
  }
};