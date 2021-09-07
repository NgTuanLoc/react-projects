const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "TOGGLE_AMOUNT":
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "incr") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.type === "decr") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };

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
    case "LOADING":
      return { ...state, loading: true };
    case "FETCHING_DATA":
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
