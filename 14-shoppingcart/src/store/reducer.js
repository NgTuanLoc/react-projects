const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return {
              ...cartItem,
              amount: cartItem.amount + 1,
            };
          }
          return cartItem;
        }),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload) {
              return {
                ...cartItem,
                amount: cartItem.amount - 1,
              };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.amount !== 0),
      };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (totalItem, currentItem) => {
          const { price, amount } = currentItem;
          totalItem.total += price * amount;
          totalItem.amount += amount;
          return totalItem;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    default:
      return state;
  }
};

export default reducer;
