export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, curr) => curr.price + acc, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      let foundBefore = [];
      let newBasket = [];
      state.basket.forEach((item) => {
        if (item.id === action.id) {
          if (foundBefore[item.id]) {
            newBasket = [...newBasket, item];
          }
          foundBefore[item.id] = true;
        } else {
          newBasket = [...newBasket, item];
        }
      });
      return {
        ...state,
        basket: newBasket,
      };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
