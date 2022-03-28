export const initialState = {
  basket: []
};

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      break;
    case "REMOVE_FROM_BASKET":
      //logic for remiving from the basket
      break;
    default:
      return state;
  }
}
