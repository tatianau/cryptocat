export default (OptionsList = [], action) => {
  switch (action.type) {
    case 'FETCH_DROPDOWN': 
      return OptionsList = action.payload.filter((item, index, array) => array.indexOf(item) > 4);
    case 'REMOVE_FROM_DROPDOWN': 
      return OptionsList.filter(item => item.id !== action.payload);
    case 'ADD_TO_DROPDOWN': 
      return [...OptionsList, action.payload];
    default:
      return OptionsList;
  }
};