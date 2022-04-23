export const initialState = {
  basket: [
    {
      id: "123456",
      title:
        "Guess Perfume - Guess 1981 - perfumes for women, 100 ml - EDT Spray",
      price: "50",
      rating: "5",
      image: "https://m.media-amazon.com/images/I/61Xv4lrqk8L._AC_SX425_.jpg"
    }
  ],
  user: null
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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
      //clone the baskt
      let newBasket = [...state.basket];
      //check if the product is in basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product id ${action.id} from the basket`);
      }

      return { ...state, newBasket };

    default:
      return state;
  }
}
