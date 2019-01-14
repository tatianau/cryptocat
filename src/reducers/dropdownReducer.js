export default (OptionsList = [], action) => {
  switch (action.type) {
    case 'FETCH_DROPDOWN': 
      return OptionsList = action.payload.filter((item, index, array) => array.indexOf(item) > 4);
    case 'SELECT_DROPDOWN': 
      return OptionsList.filter(value => value !== action.payload.value);
    default:
      return OptionsList;
  }
};