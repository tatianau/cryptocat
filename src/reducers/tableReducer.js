export default (listOfRows = [], action) => {
  switch (action.type) {
    case 'ADD_TABLE_ROW': 
      return [...listOfRows, action.payload.id];
    case 'REMOVE_TABLE_ROW': 
      return listOfRows.filter(id => id !== action.payload.id);
    default:
      return listOfRows;
  }
};