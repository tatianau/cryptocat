export default (OptionsList = [], action) => {
  switch (action.type) {
    case 'SELECT_DROPDOWN': 
      return OptionsList.filter(value => value !== action.payload.value);
    default:
      return OptionsList;
  }
};