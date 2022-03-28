export const initialState = {
  basket: [],
  user: null
};

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case "REMOVE_FROM_BASKET":
      //logic for remiving from the basket
      return { state };

    default:
      return state;
  }
}
