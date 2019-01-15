export default (listOfRows = [], action) => {
  switch (action.type) {
    case 'FETCH_TABLE': 
      return listOfRows = action.payload;
    case 'ADD_TABLE_ROW': 
      return [...listOfRows, action.payload.id];
    case 'REMOVE_TABLE_ROW': 
      return listOfRows.filter(item => item.id !== action.payload);
    default:
      return listOfRows;
  }
};